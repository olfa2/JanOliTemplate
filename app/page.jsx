import Link from "next/link";
import { config } from "../config";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section 
        className="relative min-h-[75vh] flex items-center justify-center text-white text-center overflow-hidden"
        style={{ 
          background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1486006396193-471a2abc8817?q=80&w=2000') no-repeat center center/cover"
        }}
      >
        <div className="container-main relative z-10 flex flex-col items-center gap-6 animate-fade-in-up">
          <span className="bg-brand-accent/20 text-blue-300 font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full text-sm backdrop-blur-md border border-blue-400/30">
            Meisterwerkstatt
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold max-w-4xl leading-tight">
            Modern. Seriös.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Kompetent.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl text-center font-medium opacity-90">
            Ihre etablierte Markenwerkstatt in Ihrer Stadt. Transparenter Service, faire Preise und fachgerechte Reparaturen für alle Automarken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link className="button-primary text-lg !px-8 !py-4 shadow-[0_0_25px_rgba(37,99,235,0.4)]" href="/termin">
              Termin vereinbaren
            </Link>
            <Link className="button-secondary text-lg !px-8 !py-4 !bg-transparent border-white text-white hover:!bg-white hover:!text-brand-dark" href="/leistungen">
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US / SERVICES PREVIEW */}
      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-title">Warum zu uns?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Modernste Diagnosetechnik trifft auf jahrelange Erfahrung. Wir bieten Ihnen Service auf Herstellerniveau.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="card group hover:ring-2 ring-brand-accent/20 cursor-default">
              <div className="w-14 h-14 bg-blue-100 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Meisterbetrieb</h3>
              <p className="text-slate-600 leading-relaxed">
                Als Kfz-Meisterbetrieb garantieren wir fachkompetente Arbeiten und eine professionelle Diagnosetechnik für Ihr Fahrzeug.
              </p>
            </article>

            {/* Card 2 */}
            <article className="card group hover:ring-2 ring-brand-accent/20 cursor-default">
              <div className="w-14 h-14 bg-blue-100 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Volles Vertrauen</h3>
              <p className="text-slate-600 leading-relaxed">
                Klare Kommunikation, absolut faire und transparente Preise sowie eine jederzeit nachvollziehbare Arbeitsweise.
              </p>
            </article>

            {/* Card 3 */}
            <article className="card group hover:ring-2 ring-brand-accent/20 cursor-default">
              <div className="w-14 h-14 bg-blue-100 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Top-Qualität</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir arbeiten nach professionellen Standards, vergleichbar mit etablierten Hersteller-Markenwerkstätten.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MAP & CTA SECTION */}
      <section className="section bg-white border-t border-slate-100">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-dark">Besuchen Sie uns vor Ort</h2>
              <p className="text-slate-600 text-lg mb-8">
                Unsere Werkstatt ist leicht erreichbar und bietet ausreichend Parkmöglichkeiten direkt vor der Tür. Wir freuen uns, Sie und Ihr Fahrzeug kennenzulernen.
              </p>
              
              <div className="flex flex-col gap-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-full text-brand-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Adresse</h4>
                    <p className="text-slate-500">{config.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-full text-brand-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Öffnungszeiten</h4>
                    <p className="text-slate-500">Montag - Freitag: 08:00 - 17:00 Uhr</p>
                  </div>
                </div>
              </div>

              <Link className="button-primary w-full sm:w-auto" href="/termin">
                Jetzt Termin vereinbaren
              </Link>
            </div>

            <div className="w-full lg:w-1/2 h-[450px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Fallback Google Maps iframe (Replace src with actual Maps Embed URL) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.628864703908!2d11.575490000000001!3d48.137154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzEzLjgiTiAxMcKwMzQnMzEuOCJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Standort Karte"
                className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
