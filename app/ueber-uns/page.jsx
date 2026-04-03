export default function UeberUnsPage() {
  return (
    <main className="section">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h1 className="section-title">Ueber uns</h1>
          <p>Seit [Anzahl] Jahren steht unser Team fuer Zuverlaessigkeit und fachgerechte Reparaturen.</p>
          <p>Wir verbinden klassische Werkstattwerte mit moderner Fahrzeugtechnik.</p>
        </section>
        <section className="card">
          <h3 className="text-xl font-bold mb-2">Unsere Werte</h3>
          <p>Qualitaet, Transparenz und verbindlicher Service.</p>
        </section>
      </div>
    </main>
  );
}
