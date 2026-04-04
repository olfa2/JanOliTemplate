import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    // 1. Validierung der Pflichtfelder am Server
    if (!name || !email || !message) {
      console.warn("Validierung fehlgeschlagen. Daten:", { name, email, message });
      return NextResponse.json(
        { error: 'Name, Email und Nachricht sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    // 2. Transporter Konfiguration für Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 3. SMTP-Verbindung testen bevor gesendet wird
    try {
      await transporter.verify();
      console.log('✅ SMTP Verbindung zu Gmail erfolgreich.');
    } catch (verifyError) {
      console.error('❌ SMTP Auth Fehler:', verifyError);
      return NextResponse.json(
        { error: 'Serverkonfigurationsfehler: Konnte nicht beim Email-Provider authentifizieren.' },
        { status: 500 }
      );
    }

    // Variablen auslesen (Fallback auf GMAIL_USER, falls NOTIFICATION_EMAIL fehlt)
    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER;
    const workshopName = process.env.WORKSHOP_NAME || 'Ihre Werkstatt';

    // 4. Benachrichtigungs-Email an DICH (bzw. die Werkstatt)
    const mailOptions = {
      from: `"${name} (Website)" <${process.env.GMAIL_USER}>`, // WICHTIG: Absender muss zwingend dein Gmail-User sein!
      replyTo: email, // Damit Klick auf "Antworten" direkt an den Kunden geht!
      to: recipientEmail,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Neue Anfrage über die Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
          <p><strong>Service:</strong> ${service || 'Nicht angegeben'}</p>
          <br/>
          <p><strong>Nachricht:</strong></p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Benachrichtigung via Email an ${recipientEmail} versendet.`);

    // 5. (Optionale) Bestätigungs-Email an den KUNDEN
    if (process.env.SEND_CUSTOMER_CONFIRMATION === 'true') {
      const confirmationOptions = {
        from: `"${workshopName}" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Ihre Anfrage bei ${workshopName}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>Vielen Dank für Ihre Anfrage, ${name}!</h2>
            <p>Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
            <br/>
            <p><strong>Ihre übermittelte Nachricht:</strong></p>
            <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; color: #555;">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <br/>
            <p>Mit freundlichen Grüßen<br/><strong>Ihr Team von ${workshopName}</strong></p>
          </div>
        `,
      };
      await transporter.sendMail(confirmationOptions);
      console.log(`✅ Bestätigungs-Email an ${email} (Kunde) versendet.`);
    }

    // 6. Erfolgreiche Rückmeldung ans Frontend senden
    return NextResponse.json(
      { success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Allgemeiner Sende-Fehler in route.js:', error);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
