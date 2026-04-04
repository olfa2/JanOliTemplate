import BookingForm from "../../components/BookingForm";
import { config } from "../../config"; // Or from the root config path, trying "../../config" based on other files.

export const metadata = {
  title: "Termin online buchen | [Firmenname]",
  description: "Buchen Sie jetzt unkompliziert Ihren Werkstatttermin. In 3 einfachen Schritten sichern Sie sich Ihren Wunschtermin."
};

export default function TerminPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-brand-dark text-white pt-16 pb-12 overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1.5px)] bg-[length:24px_24px]"></div>
         <div className="container-main relative z-10 text-center animate-fade-in-up">
           <span className="bg-brand-accent/20 text-blue-300 font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full text-sm backdrop-blur-md mb-4 inline-block">
            Online Buchung
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Schnell. Unkompliziert. Verbindlich.
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ihr Weg zu einem sicheren Fahrzeug war noch nie so einfach. 
            Füllen Sie unser Formular aus und wir reservieren Ihren Wunschtermin!
          </p>
         </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="w-14 h-14 bg-blue-50 text-brand-accent rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-brand-accent group-hover:text-white transition-colors">1</div>
              <h3 className="font-bold text-lg text-brand-dark">Leistung wählen</h3>
              <p className="text-sm text-slate-500">Wählen Sie den benötigten Service (z.B. Inspektion, Reifenwechsel) aus der Liste.</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="w-14 h-14 bg-blue-50 text-brand-accent rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-brand-accent group-hover:text-white transition-colors">2</div>
              <h3 className="font-bold text-lg text-brand-dark">Daten eintragen</h3>
              <p className="text-sm text-slate-500">Hinterlassen Sie uns Ihre Kontaktdaten, Fahrzeuginfos und Ihren Wunschtermin.</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-3 group">
               <div className="w-14 h-14 bg-blue-50 text-brand-accent rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-brand-accent group-hover:text-white transition-colors">3</div>
              <h3 className="font-bold text-lg text-brand-dark">Bestätigung & fertig</h3>
              <p className="text-sm text-slate-500">Wir prüfen Ihre Anfrage sofort und senden Ihnen verbindlich eine Bestätigung zu!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM & TRUST SECTION */}
      <section className="py-16">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 sticky top-24">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
               <h3 className="text-xl font-bold text-brand-dark mb-4">Warum eigentlich zu uns?</h3>
               <ul className="flex flex-col gap-4 text-slate-600">
                 <li className="flex gap-3">
                   <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                   <span><strong>Kostentransparenz:</strong> Sie wissen vorher genau, was es kostet. Keine Überraschungen.</span>
                 </li>
                 <li className="flex gap-3">
                   <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                   <span><strong>Meisterqualität:</strong> Unsere Reparaturen entsprechen den höchsten Standards und Vorgaben.</span>
                 </li>
                 <li className="flex gap-3">
                   <svg className="w-6 h-6 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                   <span><strong>Schnelle Abwicklung:</strong> Dank effizienter Prozesse sind Sie schnellstmöglich wieder mobil.</span>
                 </li>
               </ul>
            </div>

            <div className="bg-brand-dark p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Das sagen unsere Kunden</h3>
              <div className="flex text-yellow-400 mb-2">
                 {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
              </div>
              <p className="italic text-slate-300 leading-relaxed mb-4">
                „Ich war beeindruckt von der schnellen und ehrlichen Kommunikation! Den Online-Termin habe ich direkt am nächsten Tag bekommen.“
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">MB</div>
                <div className="text-sm font-semibold">Michael B.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
