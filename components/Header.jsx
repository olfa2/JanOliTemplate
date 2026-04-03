"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { config } from "../config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container-main topbar-inner">
          <span>{config.contact.address}</span>
          <span>Mo-Fr: 08:00 - 17:00 Uhr</span>
          <a href={`tel:${config.contact.phone}`}>{config.contact.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container-main header-inner">
          <Link href="/" className="brand">[Logo / <span className="brand-accent">Name</span>]</Link>
          <nav className="desktop-nav">
            {config.nav.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
            ))}
          </nav>
          <Link href="/kontakt" className="button-primary desktop-cta">Termin vereinbaren</Link>
          <button className="mobile-toggle" aria-label="Menue" onClick={() => setOpen((v) => !v)}>?</button>
        </div>
        {open ? (
          <div className="container-main mobile-nav">
            {config.nav.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/kontakt" className="button-primary" onClick={() => setOpen(false)}>Termin vereinbaren</Link>
          </div>
        ) : null}
      </header>
    </>
  );
}
