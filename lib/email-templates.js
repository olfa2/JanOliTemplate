function escapeHtml(input = "") {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDateTime(date, time) {
  if (!date && !time) return "Nicht angegeben";
  return [date, time].filter(Boolean).join(" ");
}

export function workshopTemplate(data, workshopName) {
  const text = `Guten Tag,

es wurde eine neue Anfrage über das Kontaktformular gesendet.

--- Kundendaten ---
Name: ${data.name}
E-Mail: ${data.email}

--- Gewählte Leistung ---
${data.service}

--- Nachricht ---
${data.message}

-------------------------

Bitte zeitnah bearbeiten.

Mit freundlichen Grüßen
KFZ Website System`;

  const html = `<div style="font-family:Inter,Arial,sans-serif;padding:24px;background:#f8fafc;color:#0f172a;">
<p>Guten Tag,</p>
<p>es wurde eine neue Anfrage &uuml;ber das Kontaktformular gesendet.</p>

<h3 style="margin-top:20px;border-bottom:1px solid #ccc;padding-bottom:5px;">Kundendaten</h3>
<p>
  <strong>Name:</strong> ${escapeHtml(data.name)}<br>
  <strong>E-Mail:</strong> ${escapeHtml(data.email)}
</p>

<h3 style="margin-top:20px;border-bottom:1px solid #ccc;padding-bottom:5px;">Gew&auml;hlte Leistung</h3>
<p>${escapeHtml(data.service)}</p>

<h3 style="margin-top:20px;border-bottom:1px solid #ccc;padding-bottom:5px;">Nachricht</h3>
<p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>

<hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
<p>Bitte zeitnah bearbeiten.</p>
<p>Mit freundlichen Gr&uuml;&szlig;en<br><strong>KFZ Website System</strong></p>
</div>`;

  return { html, text };
}

export function customerTemplate(data, workshopName, responseHours, contactEmail) {
  const preferred = formatDateTime(data.preferredDate, data.preferredTime);
  const html = `<div style="font-family:Inter,Arial,sans-serif;padding:24px;background:#f8fafc;color:#0f172a;"><h1>Ihre Terminanfrage bei ${escapeHtml(workshopName)}</h1><p>Vielen Dank ${escapeHtml(data.name)}. Ihre Anfrage ist eingegangen.</p><p>Wir melden uns innerhalb von ${responseHours}h.</p><p><strong>Zusammenfassung:</strong><br>Wunschtermin: ${escapeHtml(preferred)}<br>Fahrzeug: ${escapeHtml(data.vehicleBrand)} ${escapeHtml(data.vehicleModel)} (${escapeHtml(data.licensePlate)})</p><p>Kontakt: ${escapeHtml(contactEmail)}</p></div>`;
  const text = `Ihre Terminanfrage bei ${workshopName}\nVielen Dank ${data.name}. Wir melden uns innerhalb von ${responseHours}h.\nWunschtermin: ${preferred}`;
  return { html, text };
}
