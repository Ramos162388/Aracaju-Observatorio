import React from 'react';

export var MulherPage = function() {
  var stats = [
    { value: '53,2%', label: 'População Feminina', sublabel: 'Mulheres em Aracaju' },
    { value: '42,8%', label: 'Chefes de Família', sublabel: 'Lares chefiados por mulheres' },
    { value: '61,4%', label: 'Ensino Superior', sublabel: 'Das matrículas no ensino superior' },
    { value: '34,6%', label: 'Empreendedoras', sublabel: 'Dos CNPJs ativos na capital' },
  ];

  var programs = [
    { title: 'Casa da Mulher Brasileira', description: 'Acolhimento e atendimento humanizado a mulheres em situação de violência, com serviços integrados de assistência psicossocial, jurídica e de saúde.', icon: 'shelter' },
    { title: 'Patrulha Maria da Penha', description: 'Ronda preventiva especializada da Guarda Municipal que acompanha mulheres com medidas protetivas em Aracaju.', icon: 'shield' },
    { title: 'CRAM — Centro de Referência', description: 'Centro de Referência de Atendimento à Mulher, oferecendo apoio psicológico, social e orientação jurídica gratuita.', icon: 'heart' },
    { title: 'Projeto Elas Empreendem', description: 'Capacitação em empreendedorismo feminino com cursos de gestão, finanças e marketing para mulheres de baixa renda.', icon: 'briefcase' },
    { title: 'Programa Mãe Aracajuana', description: 'Acompanhamento pré-natal e pós-parto com equipe multidisciplinar para gestantes do SUS na capital.', icon: 'baby' },
    { title: 'Mulheres na Ciência', description: 'Bolsa de iniciação científica para meninas do ensino médio da rede municipal em parceria com universidades.', icon: 'book' },
  ];

  var indicators = [
    { name: 'Violência Doméstica', value: '2.450', change: '-8,3% vs 2024', width: '45%', color: 'var(--color-orange)' },
    { name: 'Medidas Protetivas', value: '1.820', change: '+12,5% vs 2024', width: '72%', color: 'var(--color-primary)' },
    { name: 'Atendimentos CRAM', value: '4.380', change: '+22% vs 2024', width: '88%', color: 'var(--color-primary)' },
    { name: 'Mulheres no Mercado Formal', value: '58.200', change: '+5,2% vs 2024', width: '63%', color: 'var(--color-primary)' },
    { name: 'Pré-Natal SUS', value: '6.750', change: '+3,8% vs 2024', width: '55%', color: 'var(--color-primary)' },
  ];

  var iconMap = {
    shelter: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    ),
    shield: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
      React.createElement('path', { d: 'm9 12 2 2 4-4' })
    ),
    heart: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' })
    ),
    briefcase: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('rect', { x: '2', y: '7', width: '20', height: '14', rx: '2', ry: '2' }),
      React.createElement('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
    ),
    baby: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M22 12h-4l-3 9H9l-3-9H2' }),
      React.createElement('path', { d: 'M12 2v6' }),
      React.createElement('path', { d: 'M8 5h8' })
    ),
    book: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
      React.createElement('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
    ),
  };

  return (
    <div className="min-h-screen">
      <section className="hero" style={{ minHeight: '50vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 20%, rgba(168,230,207,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(255,140,66,0.04) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Direitos e Cidadania
            </div>
            <h1 className="hero-title">Políticas <span>para Mulheres</span></h1>
            <p className="hero-subtitle">Programas, indicadores e serviços municipais voltados ao público feminino em Aracaju</p>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="section section-gradient">
        <div className="container">
          <div className="kpi-grid" style={{ marginBottom: '4rem' }}>
            {stats.map(function(stat, idx) {
              return (
                <div key={idx} className={'kpi-card ' + (idx % 2 === 0 ? 'dark' : 'amber') + ' animate-fade-in-up'} style={{ animationDelay: idx * 100 + 'ms' }}>
                  <div className="kpi-value">{stat.value}</div>
                  <div className="kpi-label">{stat.label}</div>
                  <p className="kpi-sublabel">{stat.sublabel}</p>
                </div>
              );
            })}
          </div>

          {/* Programas */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Serviços Municipais</span>
            <h2 style={{ color: 'var(--color-primary)' }}>Programas para Mulheres</h2>
            <p>Rede de proteção, empreendedorismo e cidadania feminina em Aracaju</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {programs.map(function(p, idx) {
              return (
                <div key={idx} className="dashboard-card animate-fade-in-up" style={{ animationDelay: idx * 80 + 'ms', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: idx % 2 === 0 ? 'linear-gradient(135deg, var(--color-primary), var(--color-mint))' : 'linear-gradient(135deg, var(--color-orange), var(--color-amber))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1rem', boxShadow: idx % 2 === 0 ? '0 4px 12px rgba(0,105,102,0.25)' : '0 4px 12px rgba(255,140,66,0.25)' }}>
                    {iconMap[p.icon]}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-gray-900)', margin: '0 0 0.5rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6, flex: 1 }}>{p.description}</p>
                </div>
              );
            })}
          </div>

          {/* Indicadores */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Acompanhamento</span>
            <h2 style={{ color: 'var(--color-primary)' }}>Indicadores da Mulher</h2>
            <p>Dados monitorados pela Secretaria Municipal de Políticas para Mulheres</p>
          </div>
          <div className="dashboard-kpi-panel" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {indicators.map(function(item, idx) {
                var isUp = item.change.indexOf('+') === 0;
                var barColor = isUp ? 'var(--color-mint)' : 'var(--color-orange)';
                return (
                  <div key={idx} className="animate-fade-in-up" style={{ animationDelay: idx * 80 + 'ms' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: barColor, display: 'inline-block', boxShadow: '0 0 8px ' + barColor }}></span>
                        <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.9)' }}>{item.name}</span>
                      </div>
                      <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>{item.value}</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '0.25rem' }}>
                      <div style={{ height: '100%', width: item.width, background: 'linear-gradient(90deg, ' + barColor + ', rgba(255,255,255,0.4))', borderRadius: '9999px', transition: 'width 1s ease' }}></div>
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>{item.change}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Canais */}
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-badge">Atendimento</span>
            <h2 style={{ color: 'var(--color-primary)' }}>Canais de Apoio</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { channel: 'Ligue 180', desc: 'Central de Atendimento à Mulher', color: 'var(--color-primary)' },
              { channel: 'Disque 100', desc: 'Direitos Humanos', color: 'var(--color-orange)' },
              { channel: 'CRAM Aracaju', desc: '(79) 3179-1661', color: 'var(--color-teal)' },
              { channel: 'Casa da Mulher', desc: 'Praça Fausto Cardoso, s/n', color: 'var(--color-amber)' },
            ].map(function(c, idx) {
              return (
                <div key={idx} className="dashboard-card" style={{ textAlign: 'center', cursor: 'default' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.25rem', color: c.color, marginBottom: '0.25rem' }}>{c.channel}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)' }}>{c.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
