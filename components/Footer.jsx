import Link from "next/link";
import { config } from "../config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-main footer-grid">
        <div>
          <h4>{config.workshopName}</h4>
          <p>Modern, vertrauenswuerdig und kompetent wie eine etablierte Markenwerkstatt.</p>
        </div>
        <div>
          <h4>Kontakt & Oeffnungszeiten</h4>
          <p>{config.contact.address}</p>
          <p>Mo-Fr: 08:00-17:00 Uhr</p>
        </div>
        <div>
          <h4>Social Media</h4>
          <p><a href="#">Instagram</a><br /><a href="#">Facebook</a></p>
        </div>
        <div>
          <h4>Rechtliches</h4>
          <p><Link href="/rechtliches">Impressum</Link><br /><Link href="/rechtliches">Datenschutz</Link></p>
        </div>
      </div>
      <div className="container-main footer-bottom">&copy; 2026 {config.workshopName}. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
