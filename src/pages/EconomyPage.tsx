import React from 'react';

export var EconomyPage = function() {
  var stats = [
    { value: '35,5%', label: 'PIB Sergipe', sublabel: 'Concentrado em Aracaju' },
    { value: '898', label: 'Novas Empresas', sublabel: 'Setores monitorados 2025' },
    { value: '97,4%', label: 'Microempresas', sublabel: 'Forca do empreendedorismo local' },
    { value: 'R$ 300Mi', label: 'Microcredito', sublabel: 'Crediamigo em Sergipe' },
  ];
  var sectors = [
    { sector: 'Tecnologia', growth: '+38,5%', details: '54 novas empresas TI' },
    { sector: 'Pet Market', growth: '+11%', details: '70 novas empresas pet' },
    { sector: 'Beleza', growth: '+16%', details: '774 novas empresas beleza' },
  ];

  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Dados Publicos
            </div>
            <h1 className="hero-title">Setor <span>Economico</span></h1>
            <p className="hero-subtitle">PIB, empreendedorismo e indicadores de desenvolvimento economico</p>
          </div>
        </div>
      </section>
      <section className="section section-gradient">
        <div className="container">
          <div className="kpi-grid" style={{ marginBottom: '4rem' }}>
            {stats.map(function(stat, idx) {
              return (
                <div key={idx} className={'kpi-card ' + (idx % 2 === 0 ? 'dark' : 'amber') + ' animate-fade-in-up'} style={{ animationDelay: idx * 100 + 'ms' }}>
                  <div className="kpi-value">{stat.value}</div>
                  <div className="kpi-label">{stat.label}</div>
                  <p style={{ fontSize: '0.875rem', opacity: 0.75, marginTop: '0.25rem' }}>{stat.sublabel}</p>
                </div>
              );
            })}
          </div>
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
            <h2 style={{ color: 'var(--color-primary)' }}>Crescimento Empresarial</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sectors.map(function(item) {
              return (
                <div key={item.sector} className="service-card" style={{ cursor: 'default', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.sector}</h3>
                    <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{item.details}</p>
                  </div>
                  <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-orange)' }}>{item.growth}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
