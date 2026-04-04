import Link from "next/link";

export const metadata = {
  title: "Referenzen | [Firmenname]",
  description: "Erfahrungen unserer Kunden und Einblicke in unsere hochwertigen Werkstattleistungen."
};

export default function ReferenzenPage() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center text-white text-center overflow-hidden"
        style={{ 
          background: "linear-gradient(to right, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000') no-repeat center center/cover"
        }}
      >
        <div className="container-main relative z-10 animate-fade-in-up mt-10">
           <span className="bg-brand-accent/20 text-blue-300 font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full text-sm backdrop-blur-md border border-blue-400/30 mb-4 inline-block">
            Kundenerfahrungen
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Das sagen unsere Kunden.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
            Überzeugen Sie sich von echter Handwerksqualität und dem Feedback unserer zufriedenen Kunden.
          </p>
        </div>
      </section>

      {/* 2. TESTIMONIALS GRID */}
      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-title">Echte Bewertungen</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              ))}
            </div>
            <p className="text-slate-500 font-bold">4.9 von 5 Sternen bei Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <article className="card bg-white hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">
                  "Schneller Termin, absolut transparente Vorab-Kostenkalkulation und super
                  freundliches Team. Meine Bremsen wurden einwandfrei erneuert. Gerne wieder!"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-dark font-bold">TM</div>
                <div>
                  <div className="font-bold text-brand-dark text-sm">Thomas M.</div>
                  <div className="text-slate-400 text-xs">Unfallreparatur</div>
                </div>
              </div>
            </article>

            <article className="card bg-white hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
              <div>
                 <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">
                  "Endlich eine Werkstatt, der man vertrauen kann. Der Meister hat mir genau am Auto gezeigt, 
                  was kaputt war und warum es getauscht werden muss. Fairness pur."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-dark font-bold">LW</div>
                <div>
                  <div className="font-bold text-brand-dark text-sm">Lisa W.</div>
                  <div className="text-slate-400 text-xs">Große Inspektion</div>
                </div>
              </div>
            </article>
            
            <article className="card bg-white hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
              <div>
                 <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6">
                  "Mein Motor machte komische Geräusche. Andere wollten den halben Motor tauschen, 
                  hier wurde per Diagnose ein defekter Sensor für kleines Geld identifiziert und gewechselt!"
                </p>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-dark font-bold">MK</div>
                <div>
                  <div className="font-bold text-brand-dark text-sm">Markus K.</div>
                  <div className="text-slate-400 text-xs">Fehlerdiagnose</div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 3. VISUAL GALLERY (MASONRY-LIKE GRID) */}
      <section className="section bg-white border-t border-slate-100">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">Einblicke in unsere Arbeit</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Modernste Technik und saubere Arbeitsplätze für die beste Pflege Ihres Fahrzeugs.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md group">
               <img src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=1000" alt="Werkstatt Setup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group">
               <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=500" alt="Diagnose" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group">
               <img src="https://images.unsplash.com/photo-1632823471565-1ecaedf565ac?q=80&w=500" alt="Reifen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-md group">
               <img src="https://images.unsplash.com/photo-1625049583647-7505ed1a4cb4?q=80&w=1000" alt="Engine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="section bg-brand-dark text-white text-center">
         <div className="container-main flex flex-col items-center gap-6">
           <h2 className="text-3xl md:text-4xl font-extrabold">Bereit für den besten Service?</h2>
           <p className="text-lg text-slate-400 max-w-2xl mb-4">Geben Sie Ihr Fahrzeug in vertrauensvolle Hände.</p>
           <Link className="button-primary text-lg !px-10 !py-4 shadow-xl shadow-brand-accent/50" href="/termin">
              Jetzt Termin vereinbaren
            </Link>
         </div>
      </section>

    </main>
  );
}
