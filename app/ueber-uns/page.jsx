import Link from "next/link";
import { config } from "../config";

export const metadata = {
  title: "Über uns | [Firmenname]",
  description: "Lernen Sie unser Werkstatt-Team kennen. Jahrelange Erfahrung, Leidenschaft für Autos und transparente Kommunikation."
};

export default function UeberUnsPage() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center text-white text-center overflow-hidden"
        style={{ 
          background: "linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2000') no-repeat center center/cover"
        }}
      >
        <div className="container-main relative z-10 animate-fade-in-up mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Leidenschaft für Autos.<br />
            <span className="text-brand-accent">Seit über 15 Jahren.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
            Erfahren Sie mehr über die Menschen, die täglich dafür sorgen, dass Sie sicher und entspannt ans Ziel kommen.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="section bg-white overflow-hidden">
        <div className="container-main flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative space-y-6">
            <div className="text-brand-accent tracking-widest uppercase font-bold text-sm">Unsere Geschichte</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark leading-tight">
              Klassische Werte treffen auf moderne Technik.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Angefangen als kleiner Familienbetrieb haben wir uns kontinuierlich weiterentwickelt. 
              Unsere Philosophie blieb dabei stets dieselbe: Ehrliche Beratung, fachmännische 
              Reparaturen und absolute Kostentransparenz.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Heute arbeiten in unserer Werkstatt hervorragend geschulte Mechaniker mit modernsten 
              Diagnosegeräten, um Fahrzeuge sämtlicher Marken in Bestform zu halten.
            </p>
            <div className="pt-4">
              <span className="font-bold text-xl text-brand-dark block mb-2">[Name Inhaber]</span>
              <span className="text-slate-500 italic block">Kfz-Meister & Inhaber</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -inset-4 bg-blue-50 transform rotate-3 rounded-3xl -z-10"></div>
             <img src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1000" alt="Unser Team bei der Arbeit" className="rounded-2xl shadow-xl w-full h-auto object-cover hover:-translate-y-2 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* 3. STATS BANNER */}
      <section className="py-16 bg-brand-accent text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1.5px)] bg-[length:24px_24px]"></div>
        <div className="container-main relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold block">15+</span>
            <span className="text-blue-100 font-medium">Jahre Erfahrung</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold block">5.000+</span>
            <span className="text-blue-100 font-medium">Reparierte Autos</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold block">100%</span>
            <span className="text-blue-100 font-medium">Transparenz</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold block">4.9/5</span>
            <span className="text-blue-100 font-medium">Kundenbewertung</span>
          </div>
        </div>
      </section>

      {/* 4. COMPANY VALUES */}
      <section className="section bg-slate-50">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-12">Unsere Grundwerte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="card text-left group">
              <div className="w-12 h-12 bg-slate-100 text-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Qualität ohne Kompromisse</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir verbauen ausschließlich Ersatzteile in Erstausrüsterqualität und bilden uns ständig weiter, um auf dem neuesten Stand der Technik zu sein.
              </p>
            </article>

            <article className="card text-left group">
              <div className="w-12 h-12 bg-slate-100 text-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Absolute Transparenz</h3>
              <p className="text-slate-600 leading-relaxed">
                Keine versteckten Kosten. Wir besprechen jeden Reparaturschritt vorher mit Ihnen und zeigen Ihnen auf Wunsch die ausgetauschten Altteile.
              </p>
            </article>

            <article className="card text-left group">
              <div className="w-12 h-12 bg-slate-100 text-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Verbindlicher Service</h3>
              <p className="text-slate-600 leading-relaxed">
                Ein Wort ist ein Wort. Wir halten uns an vereinbarte Fristen und Kostenvoranschläge, damit Sie in Ruhe Ihren Alltag planen können.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-white text-center">
         <div className="container-main flex flex-col items-center gap-6">
           <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Lernen Sie uns persönlich kennen.</h2>
           <p className="text-lg text-slate-500 max-w-2xl mb-4">Besuchen Sie uns vor Ort und überzeugen Sie sich selbst von unserem Service.</p>
           <Link className="button-primary text-lg !px-10 !py-4 shadow-xl shadow-brand-accent/30" href="/termin">
              Jetzt Termin anfragen
            </Link>
         </div>
      </section>

    </main>
  );
}
