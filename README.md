# JanLolliTemplate

Dieses Repository enthaelt jetzt zwei lauffaehige Varianten:

1) **Statisches HTML/CSS/JS Setup**
- Gemeinsame Komponenten: `header.html`, `footer.html`
- Einbindung per `js/layout-loader.js`
- Zentrales Styling: `CSS/styles.css`
- Seiten: `home.html`, `leistungen.html`, `ueber-uns.html`, `kontakt.html`

2) **Next.js 14 App Router Migration**
- `app/layout.jsx` mit globalem Header/Footer
- Seiten unter `app/` (`/`, `/leistungen`, `/ueber-uns`, `/kontakt`)
- Mail-API: `app/api/send-booking/route.js`
- Komponenten: `components/Header.jsx`, `components/Footer.jsx`, `components/BookingForm.jsx`
- Templates: `lib/email-templates.js`
- Zentrale Einstellungen: `config.js`

## Start (Next.js)

```bash
npm install
npm run dev
```

## Mail-System (Resend)

Die Datei `.env.local` enthaelt alle Variablen:
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `NOTIFICATION_EMAIL`
- `NEXT_PUBLIC_WORKSHOP_NAME`
- `SEND_CUSTOMER_CONFIRMATION`
- `RESPONSE_SLA_HOURS`
- `RATE_LIMIT_MAX`

## Features

- Einheitliches, modernes Design (Anthrazit/Dunkelblau + Signal-Orange)
- Sticky Header + Mobile-Menue
- Einheitlicher Footer mit Kontakt, Social, Rechtlichem
- Terminformular mit Validierung, Honeypot, Rate-Limit
- E-Mail an Werkstatt + Best�tigung an Kunden


errinnerungsfunktion evtl., multiauswahl bei leistungen, preis, kalenderfuntkion, gebrauchtfahrzeuge, 