export const config = {
  workshopName: process.env.NEXT_PUBLIC_WORKSHOP_NAME || "[Firmenname]",
  notificationEmail: process.env.NOTIFICATION_EMAIL || "werkstatt@beispiel.at",
  contact: {
    phone: "[Telefonnummer]",
    email: "[E-Mail]",
    address: "[Strasse Hausnr.], [PLZ Stadt]"
  },
  nav: [
    { href: "/", label: "Start" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/termin", label: "Termin" },
    { href: "/kontakt", label: "Kontakt" }
  ]
};
