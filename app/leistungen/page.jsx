export default function LeistungenPage() {
  return (
    <main className="section">
      <div className="container-main">
        <h1 className="section-title">Leistungen</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="card"><h3 className="text-xl font-bold mb-2">Inspektion</h3><p>Wartung nach Herstellervorgaben.</p></article>
          <article className="card"><h3 className="text-xl font-bold mb-2">Diagnose</h3><p>Praezise Fehleranalyse mit moderner Technik.</p></article>
          <article className="card"><h3 className="text-xl font-bold mb-2">Reifenservice</h3><p>Wechsel, Auswuchten und Einlagerung.</p></article>
        </div>
      </div>
    </main>
  );
}
