import React from 'react';

export var SemedPage = function() {
  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6V2M8 18l4 4 4-4M8 6l-4 4 4 4"/></svg>
              Dados Publicos
            </div>
            <h1 className="hero-title">SEMED</h1>
            <p className="hero-subtitle">Secretaria Municipal do Meio Ambiente e Desenvolvimento Sustentavel - Dados e indicadores</p>
          </div>
        </div>
      </section>
      <section className="section section-gradient" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>SEMED</h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>Dados e indicadores da Secretaria Municipal do Meio Ambiente e Desenvolvimento Sustentavel de Aracaju em breve.</p>
        </div>
      </section>
    </div>
  );
};
