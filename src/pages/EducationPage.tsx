import React from 'react';

export var EducationPage = function() {
  var stats = [
    { value: '87', label: 'Escolas Municipais', sublabel: 'Ensino fundamental' },
    { value: '42k', label: 'Matriculas', sublabel: 'Alunos ativos' },
    { value: '94%', label: 'Frequencia', sublabel: 'Media mensal' },
    { value: '3,2k', label: 'Professores', sublabel: 'Efetivos e contratados' },
  ];
  var indicators = [
    { name: 'IDEB Iniciais', value: '5,8', change: '+0,3 vs 2023', width: '58%' },
    { name: 'IDEB Finais', value: '4,9', change: '+0,2 vs 2023', width: '49%' },
  ];

  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Dados Publicos
            </div>
            <h1 className="hero-title">Setor de <span>Educacao</span></h1>
            <p className="hero-subtitle">Dados educacionais e infraestrutura escolar em Aracaju</p>
          </div>
        </div>
      </section>
      <section className="section section-gradient">
        <div className="container">
          <div className="kpi-grid" style={{ marginBottom: '4rem' }}>
            {stats.map(function(stat, idx) {
              return (
                <div key={idx} className={'kpi-card ' + (idx % 2 === 0 ? 'amber' : 'dark') + ' animate-fade-in-up'} style={{ animationDelay: idx * 100 + 'ms' }}>
                  <div className="kpi-value">{stat.value}</div>
                  <div className="kpi-label">{stat.label}</div>
                  <p className="kpi-sublabel">{stat.sublabel}</p>
                </div>
              );
            })}
          </div>
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
            <h2 style={{ color: 'var(--color-primary)' }}>Principais Indicadores</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {indicators.map(function(item) {
              return (
                <div key={item.name} className="service-card" style={{ cursor: 'default' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--color-gray-900)' }}>{item.name}</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>{item.change}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ flex: 1, height: '12px', background: 'var(--color-gray-200)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--color-orange), var(--color-amber))', borderRadius: '9999px', width: item.width }} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-orange)', minWidth: '3rem', textAlign: 'right' }}>{item.value}</span>
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
