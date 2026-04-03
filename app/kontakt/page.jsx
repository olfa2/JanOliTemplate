import BookingForm from "../../components/BookingForm";
import { config } from "../../config";

export default function KontaktPage() {
  return (
    <main className="section">
      <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section>
          <h1 className="section-title">Kontakt</h1>
          <p>Vereinbaren Sie schnell und einfach einen Werkstatttermin.</p>
          <div className="card mt-4">
            <p><strong>Telefon:</strong> {config.contact.phone}</p>
            <p><strong>E-Mail:</strong> {config.contact.email}</p>
            <p><strong>Adresse:</strong> {config.contact.address}</p>
          </div>
        </section>
        <BookingForm />
      </div>
    </main>
  );
}
