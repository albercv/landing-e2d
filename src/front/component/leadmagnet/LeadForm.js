import React, { useState } from 'react';
import { registerLeadAndGetDocument } from '../../service/leadMagnetSubscription';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gdprAccepted: false,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.gdprAccepted) {
      setError("Debes aceptar la política de privacidad para continuar.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      const result = await registerLeadAndGetDocument(formData);
      
      if (result.status === 500 || !result.success) {
        setError(result.message || "Hubo un error en el servidor. Inténtalo de nuevo.");
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError("Hubo un problema de conexión. Inténtalo de nuevo.");
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si se envió exitosamente, mostrar mensaje de confirmación
  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h3>¡Gracias por tu interés!</h3>
          <p>
            <strong>Tu guía "5 Pasos para Ahorrar 40 Horas con IA" está en camino.</strong>
          </p>
          <p>
            Hemos enviado el PDF directamente a <strong>{formData.email}</strong>. 
            Deberías recibirlo en los próximos minutos.
          </p>
          <div className="email-tips">
            <h4>📧 Consejos importantes:</h4>
            <ul>
              <li>✅ <strong>Revisa tu carpeta de spam</strong> - A veces los emails automáticos pueden llegar ahí</li>
              <li>✅ <strong>Marca nuestro email como "No es spam"</strong> - Esto nos ayuda muchísimo a llegar mejor a tu bandeja</li>
              <li>✅ <strong>Añade nuestro email a tus contactos</strong> para futuras comunicaciones</li>
            </ul>
          </div>
          <p className="support-note">
            Si no recibes el email en 10 minutos, contáctanos y te ayudaremos inmediatamente:
          </p>
          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-label">Email:</span>
              <a href="mailto:hello@evolve2digital.com">hello@evolve2digital.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Web:</span>
              <a href="https://evolve2digital.com" target="_blank" rel="noopener noreferrer">evolve2digital.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">WhatsApp:</span>
              <a href="https://wa.me/34605497639" target="_blank" rel="noopener noreferrer">+34 605 497 639</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h3>Descarga tu guía gratuita</h3>
      <p className="form-description">
        Completa el formulario y recibe inmediatamente en tu email nuestra guía exclusiva.
      </p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form className="lead-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </div>
        
        <div className="gdpr-checkbox">
          <input
            type="checkbox"
            id="gdprAccepted"
            name="gdprAccepted"
            className="checkbox-input"
            checked={formData.gdprAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="gdprAccepted" className="checkbox-label">
            Acepto recibir emails con contenido valioso sobre productividad e IA. 
            Puedes darte de baja en cualquier momento. 
            <a href="/privacy" target="_blank">Política de privacidad</a>
          </label>
        </div>
        
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : '🚀 Descargar Guía Gratis'}
        </button>
      </form>
      
      <div className="benefits">
        <h4>🎯 Lo que aprenderás:</h4>
        <ul>
          <li>Cómo automatizar tareas repetitivas con IA</li>
          <li>Herramientas específicas para cada tipo de trabajo</li>
          <li>Estrategias probadas para optimizar tu tiempo</li>
          <li>Casos de uso reales y ejemplos prácticos</li>
          <li>Plantillas listas para usar</li>
        </ul>
      </div>
    </div>
  );
};

export default LeadForm;