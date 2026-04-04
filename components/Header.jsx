"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { config } from "../config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container-main topbar-inner text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {config.contact.address}
            </span>
            <span className="hidden md:flex items-center gap-1">
              <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Mo-Fr: 08:00 - 17:00 Uhr
            </span>
          </div>
          <a href={`tel:${config.contact.phone}`} className="flex items-center gap-1 hover:text-white transition-colors font-semibold">
            <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            {config.contact.phone}
          </a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'shadow-md border-transparent' : ''}`}>
        <div className="container-main header-inner relative">
          <Link href="/" className="brand flex items-center gap-2">
            <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            <span>[Logo / <span className="brand-accent">Name</span>]</span>
          </Link>

          <nav className="desktop-nav">
            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${pathname === item.href ? "active" : ""} ${item.href === '/termin' ? "text-brand-accent font-bold bg-blue-50 px-3 py-1 rounded-full !border-none !after:hidden" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/termin" className="button-primary hidden lg:inline-flex shadow-brand-accent/20">
            Termin vereinbaren
          </Link>

          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-brand-dark hover:bg-slate-100 transition-colors"
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute w-full bg-white shadow-xl border-b border-slate-100 transition-all duration-300 origin-top overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container-main py-4 flex flex-col gap-3">
            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`p-3 rounded-lg font-semibold flex items-center justify-between ${pathname === item.href ? "bg-brand-accent/10 text-brand-accent" : (item.href === '/termin' ? "text-brand-accent bg-blue-50/50" : "text-brand-dark hover:bg-slate-50")}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.href === '/termin' && <span className="w-2 h-2 rounded-full bg-brand-accent"></span>}
              </Link>
            ))}
            <Link
              href="/termin"
              className="mt-2 button-primary text-center"
              onClick={() => setOpen(false)}
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
