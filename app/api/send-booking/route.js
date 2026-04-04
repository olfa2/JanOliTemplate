import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { config } from "../../../config";
import { customerTemplate, workshopTemplate } from "../../../lib/email-templates";

const rate = new Map();

function getIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function overLimit(ip, max = 5) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const entry = rate.get(ip) || { count: 0, reset: now + windowMs };

  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + windowMs;
  }

  entry.count += 1;
  rate.set(ip, entry);
  return entry.count > max;
}

function validate(input) {
  const errors = [];

  if (!input.name || input.name.length < 2) errors.push("Name ungueltig");
  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) errors.push("E-Mail ungueltig");
  if (!input.service) errors.push("Leistung fehlt");
  if (!input.consent) errors.push("Datenschutzzustimmung fehlt");
  if (input.website) errors.push("Spam erkannt");

  return errors;
}

export async function POST(request) {
  try {
    const { GMAIL_USER, GMAIL_APP_PASSWORD, NOTIFICATION_EMAIL } = process.env;

    console.log("ENV CHECK:", {
      GMAIL_USER,
      GMAIL_APP_PASSWORD: !!GMAIL_APP_PASSWORD,
      NOTIFICATION_EMAIL
    });
    /*
        if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !NOTIFICATION_EMAIL) {
          return NextResponse.json({
            ok: false,
            error: "Mail-Konfiguration unvollständig (GMAIL_USER, GMAIL_APP_PASSWORD, NOTIFICATION_EMAIL)"
          }, { status: 500 });
        }
    */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
      }
    });

    const ip = getIp(request);

    if (overLimit(ip, Number(process.env.RATE_LIMIT_MAX || 5))) {
      return NextResponse.json(
        { ok: false, error: "Zu viele Anfragen" },
        { status: 429 }
      );
    }

    const body = await request.json();

    const data = {
      name: String(body.name || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim().toLowerCase(),
      service: String(body.service || "").trim(),
      preferredDate: String(body.preferredDate || "").trim(),
      preferredTime: String(body.preferredTime || "").trim(),
      vehicleBrand: String(body.vehicleBrand || "").trim(),
      vehicleModel: String(body.vehicleModel || "").trim(),
      licensePlate: String(body.licensePlate || "").trim(),
      message: String(body.message || "").trim(),
      website: String(body.website || "").trim(),
      consent: Boolean(body.consent),
      timestamp: new Date().toISOString()
    };

    const errors = validate(data);

    if (errors.length) {
      return NextResponse.json(
        { ok: false, error: errors.join(", ") },
        { status: 400 }
      );
    }

    // 📧 Mail an Werkstatt
    const shop = workshopTemplate(data, config.workshopName);

    await transporter.sendMail({
      from: `${config.workshopName} <${GMAIL_USER}>`,
      to: NOTIFICATION_EMAIL,
      subject: "Neue KFZ-Anfrage von der Website",
      html: shop.html,
      text: shop.text,
      replyTo: data.email
    });

    // 📧 Bestätigung an Kunden
    const confirmEnabled = process.env.SEND_CUSTOMER_CONFIRMATION !== "false";

    if (confirmEnabled) {
      const customer = customerTemplate(
        data,
        config.workshopName,
        Number(process.env.RESPONSE_SLA_HOURS || 24),
        NOTIFICATION_EMAIL
      );

      await transporter.sendMail({
        from: `${config.workshopName} <${GMAIL_USER}>`,
        to: data.email,
        subject: `Ihre Terminanfrage bei ${config.workshopName}`,
        html: customer.html,
        text: customer.text
      });
    }

    console.info("[booking-mail] sent", {
      to: NOTIFICATION_EMAIL,
      customer: data.email
    });

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Unbekannter Fehler"
      },
      { status: 500 }
    );
  }
}