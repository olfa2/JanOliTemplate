import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="section" style={{ minHeight: "64vh", background: "linear-gradient(rgba(2,6,23,.65), rgba(2,6,23,.65)), url(https://images.unsplash.com/photo-1486006396193-471a2abc8817?q=80&w=2000) center/cover", color: "white" }}>
        <div className="container-main">
          <h1 className="section-title">Modern. Vertrauenswuerdig. Kompetent.</h1>
          <p>Ihr KFZ-Partner in [Stadt] mit transparenter Beratung und professioneller Ausfuehrung.</p>
          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <Link className="button-primary" href="/kontakt">Termin vereinbaren</Link>
            <Link className="button-secondary" href="/leistungen">Unsere Leistungen</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
