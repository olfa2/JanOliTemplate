"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
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

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.error || "Fehler beim Versand");
      setFeedback("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");
      setFormData(initialState);
    } catch (error) {
      setFeedback(error.message || "Bitte spaeter erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" style={{ display: "grid", gap: "12px" }} onSubmit={onSubmit}>
      <h3 className="text-2xl font-bold">Online-Terminanfrage</h3>
      <input name="website" value={formData.website} onChange={onChange} className="form-field" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      <input name="name" value={formData.name} onChange={onChange} className="form-field" placeholder="Ihr Name" required />
      <input name="phone" value={formData.phone} onChange={onChange} className="form-field" placeholder="Telefon" required />
      <input name="email" value={formData.email} onChange={onChange} className="form-field" type="email" placeholder="E-Mail" required />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="preferredDate" value={formData.preferredDate} onChange={onChange} className="form-field" type="date" />
        <input name="preferredTime" value={formData.preferredTime} onChange={onChange} className="form-field" type="time" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input name="vehicleBrand" value={formData.vehicleBrand} onChange={onChange} className="form-field" placeholder="Marke" required />
        <input name="vehicleModel" value={formData.vehicleModel} onChange={onChange} className="form-field" placeholder="Modell" required />
        <input name="licensePlate" value={formData.licensePlate} onChange={onChange} className="form-field" placeholder="Kennzeichen" required />
      </div>
      <textarea name="message" value={formData.message} onChange={onChange} className="form-field" rows={5} placeholder="Beschreibung des Anliegens" required />
      <label style={{ display: "flex", gap: "8px", fontSize: "14px", color: "#475569" }}>
        <input name="consent" type="checkbox" checked={formData.consent} onChange={onChange} required />
        <span>Ich stimme der Datenverarbeitung gemaess Datenschutzerklaerung zu.</span>
      </label>
      <button className="button-primary" type="submit" disabled={loading}>{loading ? "Sende..." : "Anfrage senden"}</button>
      {feedback ? <p>{feedback}</p> : null}
    </form>
  );
}
