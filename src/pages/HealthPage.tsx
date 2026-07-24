import React from 'react';

var stats = [
  { value: '15', label: 'Unidades de Saúde', sublabel: 'UAPS e postos de saúde', icon: 'building' },
  { value: '89%', label: 'Vacinação', sublabel: 'Cobertura básica infantil', icon: 'shield' },
  { value: '3,4k', label: 'Atendimentos/mês', sublabel: 'Urgência e emergência', icon: 'heart' },
  { value: '12', label: 'Hospitais', sublabel: 'Públicos e privados', icon: 'plus' },
];

var indicators = [
  { name: 'Atendimentos UBS', rate: '92%', change: '+5% vs 2024', width: '92%', color: 'var(--color-primary)' },
  { name: 'Vacinação Infantil', rate: '89%', change: '+8% vs 2024', width: '89%', color: 'var(--color-teal)' },
  { name: 'Cobertura ESF', rate: '76%', change: '+3% vs 2024', width: '76%', color: 'var(--color-amber)' },
  { name: 'Consultas Especializadas', rate: '64%', change: '+12% vs 2024', width: '64%', color: 'var(--color-orange)' },
];

var healthServices = [
  { title: 'Atenção Básica', desc: '15 UAPS distribuídas em todos os bairros de Aracaju', icon: 'home' },
  { title: 'Urgência e Emergência', desc: '3 UPAs 24h e pronto-atendimentos municipais', icon: 'alert' },
  { title: 'Vigilância Sanitária', desc: 'Monitoramento contínuo de alimentos, medicamentos e serviços', icon: 'search' },
];

function StatIcon(props) {
  var name = props.name;
  if (name === 'building') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('rect', { x: '4', y: '2', width: '16', height: '20', rx: '2' }),
      React.createElement('path', { d: 'M9 22v-4h6v4' }),
      React.createElement('path', { d: 'M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01' })
    );
  }
  if (name === 'shield') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    );
  }
  if (name === 'heart') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' })
    );
  }
  if (name === 'plus') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '16' }),
      React.createElement('line', { x1: '8', y1: '12', x2: '16', y2: '12' })
    );
  }
  return null;
}

function ServiceIcon(props) {
  var name = props.name;
  if (name === 'home') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
      React.createElement('polyline', { points: '9 22 9 12 15 12 15 22' })
    );
  }
  if (name === 'alert') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }),
      React.createElement('line', { x1: '12', y1: '9', x2: '12', y2: '13' }),
      React.createElement('line', { x1: '12', y1: '17', x2: '12.01', y2: '17' })
    );
  }
  if (name === 'search') {
    return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('circle', { cx: '11', cy: '11', r: '8' }),
      React.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
    );
  }
  return null;
}

export var HealthPage = function() {
  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '38vh' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Dashboard Saúde
            </div>
            <h1 className="hero-title">Setor de <span>Saúde</span></h1>
            <p className="hero-subtitle">Indicadores de saúde pública e gestão hospitalar em Aracaju</p>
          </div>
        </div>
      </section>

      <section className="section section-dashboard" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          {/* KPI PANEL */}
          <div className="dashboard-kpi-panel animate-fade-in-up">
            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem', maxWidth: 'none' }}>
              <span className="section-badge" style={{ background: 'rgba(127,219,200,0.15)', color: 'var(--color-teal)', boxShadow: 'none' }}>Indicadores</span>
              <h2 style={{ color: 'white' }}>Visão Geral da Saúde</h2>
              <p style={{ color: 'rgba(168,230,207,0.7)', margin: '0' }}>Principais indicadores de saúde pública municipal</p>
            </div>
            <div className="kpi-grid">
              {stats.map(function(stat, idx) {
                var variant = idx < 2 ? 'dark' : 'amber';
                return (
                  <div key={idx} className={'kpi-card ' + variant + ' animate-fade-in-up'} style={{ animationDelay: idx * 100 + 'ms' }}>
                    <div className="kpi-top">
                      <div className="kpi-icon">
                        <StatIcon name={stat.icon} />
                      </div>
                    </div>
                    <div className="kpi-body">
                      <div className="kpi-value">{stat.value}</div>
                      <div className="kpi-label">{stat.label}</div>
                      <p className="kpi-sublabel">{stat.sublabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PROGRESS BARS */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
              <span className="section-badge">Cobertura</span>
              <h2>Indicadores de Desempenho</h2>
              <p style={{ color: 'var(--color-gray-600)', margin: '0' }}>Metas e resultados dos principais serviços de saúde</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {indicators.map(function(item) {
                return (
                  <div key={item.name} className="dashboard-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--color-gray-900)', fontSize: '1rem' }}>{item.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', marginTop: '2px' }}>{item.change}</div>
                      </div>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: item.color }}>{item.rate}</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-bar" style={{ width: item.width, background: item.color }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="section-divider-dash section-divider-dash-primary" />

          {/* SERVICE CARDS */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
              <span className="section-badge">Serviços</span>
              <h2>Rede Municipal de Saúde</h2>
              <p style={{ color: 'var(--color-gray-600)', margin: '0' }}>Estrutura de atendimento à saúde da população</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {healthServices.map(function(svc) {
                return (
                  <div key={svc.title} className="dashboard-card" style={{ cursor: 'default' }}>
                    <div className="service-icon" style={{ marginBottom: '1.25rem' }}>
                      <ServiceIcon name={svc.icon} />
                    </div>
                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1.125rem' }}>{svc.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-gray-600)', lineHeight: '1.65' }}>{svc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
