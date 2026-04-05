import Link from "next/link";

export const metadata = {
  title: "Leistungen | [Firmenname]",
  description: "Unsere Werkstattleistungen im Ueberblick - von Inspektion bis Diagnose."
};

export default function LeistungenPage() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1503376712353-c04549aca9c4?q=80&w=2000') no-repeat center center/cover"
        }}
      >
        <div className="container-main relative z-10 animate-fade-in-up mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Kompetenz für Ihr Fahrzeug.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Transparenz für Sie.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
            Entdecken Sie unser umfassendes Serviceangebot - von der schnellen Diagnose bis zur komplexen Unfallreparatur.
          </p>
        </div>
      </section>

      {/* 2. ALTERNATING LAYOUTS FOR TOP SERVICES */}
      <section className="section bg-white">
        <div className="container-main flex flex-col gap-24">

          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000" alt="Inspektion & Wartung" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="text-brand-accent tracking-widest uppercase font-bold text-sm">Prävention</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">Inspektion & Wartung</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Wir führen Inspektionen streng nach den aktuellen Herstellervorgaben durch.
                Damit bleibt nicht nur die Werksgarantie Ihres Fahrzeugs erhalten, sondern Sie beugen
                auch teuren Folgeschäden vor. Jeder Service wird in Ihrem digitalen Serviceheft dokumentiert.
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Öl- und Filterwechsel</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Sicht- und Funktionsprüfungen</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Mobilitätsgarantie inklusive</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2 h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1632823469850-fd8da8b9e6fa?q=80&w=1000" alt="Fehlerdiagnose" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="text-brand-accent tracking-widest uppercase font-bold text-sm">Hightech Mechanik</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">Moderne Fehlerdiagnose</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Leuchtet eine Warnlampe? Moderne Fahrzeuge bestehen aus tausenden elektronischen Bauteilen.
                Mit unseren State-of-the-Art Diagnosegeräten lesen wir den Fehlerspeicher zügig und präzise aus,
                um das Problem an der Wurzel zu packen, anstatt nur Symptome zu bekämpfen.
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Herstellerübergreifende Diagnosetechnik</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Elektronik- & Motorsteuerung</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Schnelle und exakte Kostenvoranschläge</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ADDITIONAL SERVICES GRID */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-12">Weitere Leistungen</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="card flex flex-col items-center text-center group">
              <div className="bg-blue-100 text-brand-accent p-4 rounded-full mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Reifenservice</h3>
              <p className="text-slate-500">Reifenwechsel, Auswuchten, Achsvermessung und saisonale Radeinlagerung in unserem Reifenhotel.</p>
            </article>

            <article className="card flex flex-col items-center text-center group">
              <div className="bg-blue-100 text-brand-accent p-4 rounded-full mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Bremsenservice</h3>
              <p className="text-slate-500">Ihre Sicherheit geht vor. Wir überprüfen und erneuern Beläge, Scheiben und Bremsflüssigkeit präzise.</p>
            </article>

            <article className="card flex flex-col items-center text-center group">
              <div className="bg-blue-100 text-brand-accent p-4 rounded-full mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Klimaservice</h3>
              <p className="text-slate-500">Desinfektion, Dichtheitsprüfung und Nachfüllen des Kältemittels für eine saubere und kühle Brise.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. TRUST SECTION */}
      <section className="py-20 bg-brand-dark text-white text-center border-t border-blue-900 border-b">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Unsere Versprechen an Sie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-900/50 p-4 rounded-xl text-brand-accent"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
              <h4 className="font-bold text-lg">Meisterqualität</h4>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-900/50 p-4 rounded-xl text-brand-accent"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
              <h4 className="font-bold text-lg">Original Ersatzteile</h4>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-900/50 p-4 rounded-xl text-brand-accent"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
              <h4 className="font-bold text-lg">Preis-Transparenz</h4>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-900/50 p-4 rounded-xl text-brand-accent"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
              <h4 className="font-bold text-lg">Persönliche Beratung</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-24 bg-brand-light text-center">
        <div className="container-main flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Überzeugt? Lassen Sie uns reden.</h2>
          <p className="text-lg text-slate-500 max-w-2xl mb-4">Vereinbaren Sie jetzt schnell und unverbindlich einen Termin für Ihr Fahrzeug.</p>
          <Link className="button-primary text-lg !px-10 !py-4 shadow-xl shadow-brand-accent/30" href="/termin">
            Jetzt Termin vereinbaren
          </Link>
        </div>
      </section>

    </main>
  );
}
