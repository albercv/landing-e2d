import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
          width={150}
          height={60}
        />
      </div>
      <h1>5 pasos para ahorrar 40 h/mes con IA</h1>
      
      <div className="content-layout">
        <div className="left-content">
          <div className="subtitle-image-row">
            <div className="guide-image">
              <img 
                src="/5-pasos-para-ahorrar-40-horas-E2D-IA.png" 
                className="guide-cover" 
                width={180} 
                height={240} 
                alt="Preview de la guía"
              />
            </div>
            <div className="subtitle-content">
              <h2>Descarga gratis nuestra guía completa y transforma tu productividad</h2>
            </div>
          </div>
        </div>
        <div className="right-content">
          {/* El formulario se renderizará aquí desde LeadForm */}
        </div>
      </div>
    </header>
  )
}