import React from 'react';

export var TourismPage = function() {
  var stats = [
    { value: '28', label: 'Atrativos', sublabel: 'Turisticos cadastrados' },
    { value: '152k', label: 'Visitantes', sublabel: 'Mes de julho/2025' },
    { value: '78%', label: 'Ocupacao', sublabel: 'Hotes municipais' },
    { value: 'R$ 45M', label: 'Receita', sublabel: 'Turismo em 2025' },
  ];
  var attractions = [
    { name: 'Praia de Aracaju', type: 'Litoral', visitors: '50.000/mes' },
    { name: 'Parque das Emas', type: 'Ecologico', visitors: '12.000/mes' },
    { name: 'Catedral Metropolitana', type: 'Religioso', visitors: '8.500/mes' },
  ];

  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              Dados Publicos
            </div>
            <h1 className="hero-title">Setor de <span>Turismo</span></h1>
            <p className="hero-subtitle">Atrativos, visitantes e desenvolvimento turistico em Aracaju</p>
          </div>
        </div>
      </section>
      <section className="section section-gradient">
        <div className="container">
          <div className="kpi-grid" style={{ marginBottom: '4rem' }}>
            {stats.map(function(stat, idx) {
              return (
                <div key={idx} className={'kpi-card ' + (idx % 2 === 0 ? 'light' : 'dark') + ' animate-fade-in-up'} style={{ animationDelay: idx * 100 + 'ms' }}>
                  <div className="kpi-value">{stat.value}</div>
                  <div className="kpi-label">{stat.label}</div>
                  <p className="kpi-sublabel">{stat.sublabel}</p>
                </div>
              );
            })}
          </div>
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
            <h2 style={{ color: 'var(--color-primary)' }}>Principais Atrativos</h2>
          </div>
          <div className="services-grid">
            {attractions.map(function(a) {
              return (
                <div key={a.name} className="service-card" style={{ cursor: 'default' }}>
                  <div className="service-icon" style={{ background: 'rgba(127,219,200,0.15)', color: 'var(--color-teal-dark)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <h3 style={{ color: 'var(--color-primary)' }}>{a.name}</h3>
                  <p style={{ marginBottom: '0.75rem' }}>{a.type}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-orange)', fontWeight: 700, fontSize: '0.9375rem' }}>{a.visitors}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
