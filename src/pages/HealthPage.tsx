import React from 'react';

export var HealthPage = function() {
  var stats = [
    { value: '15', label: 'Unidades de Saude', sublabel: 'UAPS e postos' },
    { value: '89%', label: 'Vacinacao', sublabel: 'Cobertura basica' },
    { value: '3,4k', label: 'Atendimentos/mes', sublabel: 'Urgencia e emergencia' },
    { value: '12', label: 'Hospitais', sublabel: 'Publicos e privados' },
  ];

  var indicators = [
    { name: 'Atendimentos UBS', rate: '92%', change: '+5% vs 2024', width: '92%' },
    { name: 'Vacinacao Infantil', rate: '89%', change: '+8% vs 2024', width: '89%' },
  ];

  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Dados Publicos
            </div>
            <h1 className="hero-title">Setor de <span>Saude</span></h1>
            <p className="hero-subtitle">Indicadores de saude publica e gestao hospitalar em Aracaju</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="kpi-grid" style={{ marginBottom: '4rem' }}>
            {stats.map(function(stat, idx) {
              return (
                <div key={idx} className="kpi-card animate-fade-in-up" style={{ animationDelay: idx * 100 + 'ms' }}>
                  <div className="kpi-value" style={{ color: 'var(--primary)' }}>{stat.value}</div>
                  <div className="kpi-label">{stat.label}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginTop: '0.25rem' }}>{stat.sublabel}</p>
                </div>
              );
            })}
          </div>

          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
            <h2>Principais Indicadores</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {indicators.map(function(item) {
              return (
                <div key={item.name} className="service-card" style={{ cursor: 'default' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>{item.name}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{item.change}</span>
                  </div>
                  <div style={{ width: '100%', height: '12px', background: 'var(--gray-200)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--primary-light))', borderRadius: '9999px', width: item.width, transition: 'width 1s ease-out' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
