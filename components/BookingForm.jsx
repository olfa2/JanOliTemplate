"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  vehicleBrand: "",
  vehicleModel: "",
  licensePlate: "",
  message: "",
  website: "",
  consent: false
};

export default function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback("");
    setSuccess(false);

    if (!formData.name) {
      setFeedback("Fehler: Name ist erforderlich.");
      setLoading(false);
      return;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFeedback("Fehler: Bitte eine gültige E-Mail-Adresse eingeben.");
      setLoading(false);
      return;
    }
    if (!formData.service) {
      setFeedback("Fehler: Bitte wählen Sie eine Leistung aus.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.error || "Fehler beim Versand");
      
      setSuccess(true);
      setFormData(initialState);
    } catch (error) {
      setFeedback(error.message || "Bitte später erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="card flex flex-col justify-center items-center py-20 text-center animate-fade-in-up">
        {/* Animated Checkmark (Face-ID Style) */}
        <div className="relative w-24 h-24 mb-6">
          <svg className="w-full h-full text-green-500 rounded-full" viewBox="0 0 52 52">
            <circle 
              className="text-green-100" 
              cx="26" cy="26" r="25" fill="currentColor" 
            />
            <path 
              className="checkmark-path"
              fill="none" 
              stroke="#16a34a" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M14 27l7 7 16-16"
              style={{
                strokeDasharray: 48,
                strokeDashoffset: 48,
                animation: "drawCheck 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards"
              }}
            />
          </svg>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes drawCheck {
              0% { stroke-dashoffset: 48; }
              100% { stroke-dashoffset: 0; }
            }
          `}} />
        </div>
        <h3 className="text-3xl font-bold text-brand-dark mb-2">Vielen Dank!</h3>
        <p className="text-slate-500 text-lg max-w-md mx-auto mb-8">
          Ihre Terminanfrage wurde erfolgreich an uns übermittelt. Wir melden uns in Kürze bei Ihnen.
        </p>
        <button className="button-secondary" onClick={() => setSuccess(false)}>
          Neue Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <form className="card relative overflow-hidden flex flex-col gap-5 shadow-2xl shadow-slate-200/50 border-0" onSubmit={onSubmit}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-blue-300"></div>
      
      <div className="mb-2">
        <h3 className="text-2xl font-bold text-brand-dark mb-1">Online-Terminanfrage</h3>
        <p className="text-slate-500 text-sm">Füllen Sie das Formular aus, um einen Termin anzufragen.</p>
      </div>

      <input name="website" value={formData.website} onChange={onChange} tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-700 ml-1">Name *</label>
          <input name="name" value={formData.name} onChange={onChange} className="form-field" placeholder="Max Mustermann" required />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-700 ml-1">E-Mail *</label>
          <input name="email" value={formData.email} onChange={onChange} className="form-field" type="email" placeholder="mail@beispiel.de" required />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-slate-700 ml-1">Telefon *</label>
        <input name="phone" value={formData.phone} onChange={onChange} className="form-field" placeholder="0123 4567890" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-700 ml-1">Wunschdatum</label>
          <input name="preferredDate" value={formData.preferredDate} onChange={onChange} className="form-field" type="date" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-700 ml-1">Wunschuhrzeit</label>
          <input name="preferredTime" value={formData.preferredTime} onChange={onChange} className="form-field" type="time" />
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col gap-4 mt-2">
        <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wider">Fahrzeugdaten</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input name="vehicleBrand" value={formData.vehicleBrand} onChange={onChange} className="form-field !bg-white" placeholder="Marke (z.B. VW)" required />
          <input name="vehicleModel" value={formData.vehicleModel} onChange={onChange} className="form-field !bg-white" placeholder="Modell (z.B. Golf)" required />
          <input name="licensePlate" value={formData.licensePlate} onChange={onChange} className="form-field !bg-white" placeholder="Kennzeichen" required />
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <label className="text-sm font-semibold text-slate-700 ml-1">Gewünschte Leistung *</label>
        <select name="service" value={formData.service} onChange={onChange} className="form-field font-medium text-slate-700" required>
          <option value="" disabled>Bitte wählen...</option>
          <option value="Inspektion">Inspektion / Service</option>
          <option value="Ölwechsel">Ölwechsel</option>
          <option value="Reifenwechsel">Reifenwechsel</option>
          <option value="Bremsenservice">Bremsenservice</option>
          <option value="Klimaservice">Klimaservice</option>
          <option value="Diagnose">Fehlerdiagnose</option>
          <option value="Unfallreparatur">Unfallreparatur</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-slate-700 ml-1">Nachricht</label>
        <textarea name="message" value={formData.message} onChange={onChange} className="form-field resize-none leading-relaxed" rows={4} placeholder="Zusätzliche Informationen zu Ihrem Anliegen…" />
      </div>

      <label className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100 mt-2 cursor-pointer group">
        <input name="consent" type="checkbox" checked={formData.consent} onChange={onChange} className="mt-1 w-4 h-4 text-brand-accent rounded focus:ring-brand-accent" required />
        <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
          Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. (Datenschutzerklärung)
        </span>
      </label>

      {feedback && (
        <div className={`p-4 rounded-xl text-sm font-medium ${feedback.startsWith("Fehler") ? "bg-red-50 text-red-700 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
          <div className="flex items-center gap-2">
            {feedback.startsWith("Fehler") ? (
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            ) : (
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            )}
            <span>{feedback}</span>
          </div>
        </div>
      )}

      <button className="button-primary w-full mt-2 text-lg shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]" type="submit" disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Sende Anfrage...
          </span>
        ) : "Anfrage verbindlich senden"}
      </button>
    </form>
  );
}
