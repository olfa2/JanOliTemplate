import { config } from "../../config";

export const metadata = {
  title: "Kontakt | [Firmenname]",
  description: "Treten Sie mit uns in Kontakt. Wir sind gerne für Sie da."
};

export default function KontaktPage() {
  return (
    <main>
       {/* 1. HERO SECTION */}
       <section 
        className="relative min-h-[50vh] flex items-center justify-center text-white text-center overflow-hidden"
        style={{ 
          background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000') no-repeat center center/cover"
        }}
      >
        <div className="container-main relative z-10 animate-fade-in-up mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Wir sind für Sie da.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
            Haben Sie allgemeine Fragen oder benötigen Sie eine Auskunft? Hier finden Sie unsere Erreichbarkeiten.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="section bg-slate-50 min-h-[60vh]">
        <div className="container-main max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
             <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Ihre Ansprechpartner</h2>
             <p className="text-slate-500 text-lg">Zögern Sie nicht, uns während unserer Öffnungszeiten anzurufen oder jederzeit eine E-Mail zu senden.</p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="card !p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform group">
              <div className="bg-blue-100 p-4 rounded-full text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-xl mb-2">Telefon</h4>
                <a href={`tel:${config.contact.phone}`} className="text-slate-500 hover:text-brand-accent transition-colors font-medium text-lg">{config.contact.phone}</a>
              </div>
            </div>

            <div className="card !p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform group">
              <div className="bg-blue-100 p-4 rounded-full text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-xl mb-2">E-Mail</h4>
                <a href={`mailto:${config.contact.email}`} className="text-slate-500 hover:text-brand-accent transition-colors font-medium text-lg">{config.contact.email}</a>
              </div>
            </div>

            <div className="card !p-8 flex flex-col items-center text-center gap-4 md:col-span-2 hover:-translate-y-1 transition-transform group">
                <div className="bg-blue-100 p-4 rounded-full text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-xl mb-2">Werkstatt</h4>
                <p className="text-slate-500 font-medium text-lg">{config.contact.address}</p>
                <p className="text-slate-400 mt-2">Wir haben von Montag bis Freitag, 08:00 - 17:00 Uhr geöffnet.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
