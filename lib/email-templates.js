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
  const preferred = formatDateTime(data.preferredDate, data.preferredTime);
  const html = `<div style="font-family:Inter,Arial,sans-serif;padding:24px;background:#f8fafc;color:#0f172a;"><h1>Neue Terminanfrage</h1><p><strong>Name:</strong> ${escapeHtml(data.name)}<br><strong>Telefon:</strong> ${escapeHtml(data.phone)}<br><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Wunschtermin:</strong> ${escapeHtml(preferred)}<br><strong>Fahrzeug:</strong> ${escapeHtml(data.vehicleBrand)} ${escapeHtml(data.vehicleModel)} (${escapeHtml(data.licensePlate)})</p><p><strong>Anliegen:</strong><br>${escapeHtml(data.message)}</p><p><strong>Zeitpunkt:</strong> ${escapeHtml(data.timestamp)}<br><strong>Werkstatt:</strong> ${escapeHtml(workshopName)}</p></div>`;
  const text = `Neue Terminanfrage\nName: ${data.name}\nTelefon: ${data.phone}\nE-Mail: ${data.email}\nWunschtermin: ${preferred}\nFahrzeug: ${data.vehicleBrand} ${data.vehicleModel} (${data.licensePlate})\nAnliegen: ${data.message}\nZeitpunkt: ${data.timestamp}`;
  return { html, text };
}

export function customerTemplate(data, workshopName, responseHours, contactEmail) {
  const preferred = formatDateTime(data.preferredDate, data.preferredTime);
  const html = `<div style="font-family:Inter,Arial,sans-serif;padding:24px;background:#f8fafc;color:#0f172a;"><h1>Ihre Terminanfrage bei ${escapeHtml(workshopName)}</h1><p>Vielen Dank ${escapeHtml(data.name)}. Ihre Anfrage ist eingegangen.</p><p>Wir melden uns innerhalb von ${responseHours}h.</p><p><strong>Zusammenfassung:</strong><br>Wunschtermin: ${escapeHtml(preferred)}<br>Fahrzeug: ${escapeHtml(data.vehicleBrand)} ${escapeHtml(data.vehicleModel)} (${escapeHtml(data.licensePlate)})</p><p>Kontakt: ${escapeHtml(contactEmail)}</p></div>`;
  const text = `Ihre Terminanfrage bei ${workshopName}\nVielen Dank ${data.name}. Wir melden uns innerhalb von ${responseHours}h.\nWunschtermin: ${preferred}`;
  return { html, text };
}
