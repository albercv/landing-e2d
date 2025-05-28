import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
          width={200}
          height={80}
        />
      </div>
      <h1>5 pasos para ahorrar 40 h/mes con IA</h1>
      <h2>Descarga gratis nuestra guía completa y transforma tu productividad</h2>
      <div className="guide-image">
        <img 
          src="/5-pasos-para-ahorrar-40-horas-E2D-IA.png" 
          className="guide-cover" 
          width={200} 
          height={300} 
          alt="Preview de la guía"
        />
      </div>
    </header>
  )
}