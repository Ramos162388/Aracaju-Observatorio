import React, { useState, useEffect } from 'react';

function useApi(url) {
  var [data, setData] = useState(null);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState(null);
  useEffect(function() {
    var cancelled = false;
    setLoading(true);
    fetch(url).then(function(r) {
      if (!r.ok) throw new Error('Erro HTTP ' + r.status);
      return r.json();
    }).then(function(json) {
      if (!cancelled) { setData(json); setLoading(false); }
    }).catch(function(e) {
      if (!cancelled) { setError(e.message); setLoading(false); }
    });
    return function() { cancelled = true; };
  }, [url]);
  return { data: data, loading: loading, error: error };
}

function SectionBadge(props) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' } },
    React.createElement('div', { style: { height: '1px', flex: '1', maxWidth: '60px', background: 'linear-gradient(90deg, transparent, var(--color-primary))' } }),
    React.createElement('span', { className: 'section-badge', style: { background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', color: 'white', padding: '0.3rem 1.2rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', boxShadow: '0 2px 10px rgba(0,105,102,0.2)' } }, props.label),
    React.createElement('div', { style: { height: '1px', flex: '1', maxWidth: '60px', background: 'linear-gradient(90deg, var(--color-primary), transparent)' } })
  );
}

function SectionDivider() {
  return React.createElement('div', { style: { height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,105,102,0.1), var(--color-primary), rgba(0,105,102,0.1), transparent)', margin: '2rem 0 3rem' } });
}

function IndicatorIcon(props) {
  var up = props.up;
  var color = up ? 'var(--color-primary)' : 'var(--color-orange)';
  var bg = up ? 'linear-gradient(135deg, var(--color-primary), var(--color-mint))' : 'linear-gradient(135deg, var(--color-orange), var(--color-amber))';
  return React.createElement('div', {
    style: {
      width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
      boxShadow: up ? '0 4px 10px rgba(0,105,102,0.3)' : '0 4px 10px rgba(255,140,66,0.3)'
    }
  },
    React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '3', strokeLinecap: 'round', strokeLinejoin: 'round' },
      up
        ? React.createElement('polyline', { points: '18 15 12 9 6 15' })
        : React.createElement('polyline', { points: '6 9 12 15 18 9' })
    )
  );
}

function getIcon(name) {
  var icons = {
    shelter: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })),
    shield: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
      React.createElement('path', { d: 'm9 12 2 2 4-4' })),
    heart: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' })),
    briefcase: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('rect', { x: '2', y: '7', width: '20', height: '14', rx: '2', ry: '2' }),
      React.createElement('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })),
    baby: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M22 12h-4l-3 9H9l-3-9H2' }),
      React.createElement('path', { d: 'M12 2v6' }),
      React.createElement('path', { d: 'M8 5h8' })),
  };
  return icons[name] || null;
}

export var MulherPage = function() {
  var { data, loading, error } = useApi('/api/mulher/dashboard');
  var d = data;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #ffffff 0%, var(--color-gray-50) 50%, #ffffff 100%)' }}>
      <section className="hero" style={{ minHeight: '42vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 20%, rgba(168,230,207,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(255,140,66,0.04) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              SerMulher — Secretaria da Mulher
            </div>
            <h1 className="hero-title">Políticas <span>para Mulheres</span></h1>
            <p className="hero-subtitle">Programas, indicadores e serviços municipais voltados ao público feminino em Aracaju</p>
          </div>
        </div>
      </section>

      {loading && (
        <section className="section section-dashboard">
          <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
            <div className="loading-pulse" style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-mint))', margin: '0 auto 1.5rem', boxShadow: '0 0 30px rgba(0,105,102,0.2)' }}></div>
            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.125rem' }}>Carregando dashboard...</p>
          </div>
        </section>
      )}

      {!loading && error && (
        <section className="section section-dashboard">
          <div className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p style={{ color: 'var(--color-orange)', fontSize: '1rem' }}>API indisponível — exibindo dados offline</p>
          </div>
        </section>
      )}

      {!loading && d && (
        <section className="section section-dashboard" style={{ paddingTop: '2.5rem' }}>
          <div className="container">

            {/* Data source info */}
            {d.ultimaAtualizacao && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-gray-400)', background: 'var(--color-gray-100)', padding: '0.25rem 1rem', borderRadius: '9999px', fontWeight: 500 }}>
                  Fonte: {d.fonte} · {d.periodo}
                </span>
              </div>
            )}

            {/* TOC */}
            <div className="dashboard-card" style={{ marginBottom: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,105,102,0.02), rgba(168,230,207,0.03))', borderColor: 'rgba(0,105,102,0.08)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '6px' }}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
                Índice
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {[
                  { label: 'Indicadores Gerais', target: 'indicadores' },
                  { label: 'Balanço CRAM', target: 'cram' },
                  { label: 'Atendimentos por Mês', target: 'atendimentos' },
                  { label: 'Taxas', target: 'taxas' },
                  { label: 'Programas', target: 'programas' },
                  { label: 'Notícias', target: 'noticias' },
                  { label: 'Canais de Apoio', target: 'canais' },
                ].map(function(item, i) {
                  return React.createElement('a', {
                    key: i,
                    href: '#sec-' + item.target,
                    style: {
                      padding: '0.4rem 0.9rem', borderRadius: '9999px',
                      background: i === 0 ? 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' : 'var(--color-gray-100)',
                      color: i === 0 ? 'white' : 'var(--color-gray-700)',
                      fontWeight: 600, fontSize: '0.8125rem', textDecoration: 'none',
                      transition: 'all 0.15s'
                    }
                  }, item.label);
                })}
              </div>
            </div>

            {/* SEC 1: KPIs */}
            <div id="sec-indicadores" style={{ marginBottom: '4rem' }}>
              <SectionBadge label="Indicadores Gerais" />
              <div className="kpi-grid">
                {(d.kpis || []).map(function(stat, idx) {
                  return React.createElement('div', { key: idx, className: 'kpi-card ' + (idx % 2 === 0 ? 'dark' : 'amber') + ' animate-fade-in-up', style: { animationDelay: idx * 100 + 'ms' } },
                    React.createElement('div', { className: 'kpi-value' }, stat.value),
                    React.createElement('div', { className: 'kpi-label' }, stat.label),
                    React.createElement('p', { className: 'kpi-sublabel' }, stat.sublabel)
                  );
                })}
              </div>
            </div>

            <SectionDivider />

            {/* SEC 2: Balanço CRAM */}
            {d.cramBalanco && (
              <div id="sec-cram" style={{ marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <SectionBadge label="Balanço CRAM — 1º Semestre 2026" />
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, color: 'var(--color-gray-900)', margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Centro de Referência de Atendimento à Mulher</h2>
                  <p style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>Dados extraídos do balanço oficial divulgado em 13/07/2026</p>
                </div>

                {/* Destaques */}
                <div className="dashboard-card card-neon" style={{ marginBottom: '2rem', padding: 0, overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    {d.cramBalanco.destaques.map(function(item, idx) {
                      var up = item.direcao === 'up';
                      return React.createElement('div', {
                        key: idx,
                        style: {
                          padding: '1.25rem 1rem', textAlign: 'center',
                          borderRight: idx < d.cramBalanco.destaques.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
                          borderBottom: '1px solid var(--color-gray-100)',
                          background: up ? 'rgba(0,105,102,0.02)' : 'rgba(255,140,66,0.02)'
                        }
                      },
                        React.createElement('div', { style: { display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' } },
                          React.createElement(IndicatorIcon, { up: up })
                        ),
                        React.createElement('div', { style: { fontWeight: 800, fontSize: '1.25rem', color: up ? 'var(--color-primary)' : 'var(--color-orange)' } }, item.valor),
                        React.createElement('div', { style: { fontWeight: 600, fontSize: '0.8125rem', color: 'var(--color-gray-800)', marginBottom: '0.15rem' } }, item.label),
                        React.createElement('div', { style: { fontSize: '0.7rem', color: 'var(--color-gray-400)' } }, item.periodo)
                      );
                    })}
                  </div>
                </div>

                {/* Serviços do CRAM */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                  {d.cramBalanco.servicos.map(function(s, idx) {
                    return React.createElement('div', { key: idx, className: 'dashboard-card', style: { background: 'rgba(0,105,102,0.02)' } },
                      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' } },
                        React.createElement('div', { style: { width: '8px', height: '8px', borderRadius: '50%', background: idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-orange)', boxShadow: '0 0 8px ' + (idx % 2 === 0 ? 'rgba(0,105,102,0.4)' : 'rgba(255,140,66,0.4)') } }),
                        React.createElement('div', { style: { fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-gray-900)' } }, s.tipo)
                      ),
                      React.createElement('p', { style: { fontSize: '0.8125rem', color: 'var(--color-gray-600)', margin: '0 0 0.25rem', lineHeight: 1.5 } }, s.descricao),
                      React.createElement('div', { style: { fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 } }, s.destaque)
                    );
                  })}
                </div>
              </div>
            )}

            <SectionDivider />

            {/* SEC 3: Atendimentos Mensais */}
            {d.cramBalanco && d.cramBalanco.atendimentosMensais && (
              <div id="sec-atendimentos" style={{ marginBottom: '4rem' }}>
                <SectionBadge label="Atendimentos por Mês" />
                <div className="dashboard-card card-neon" style={{ overflowX: 'auto' }}>
                  <table className="dashboard-table dashboard-table-neon">
                    <thead>
                      <tr>
                        <th>Mês</th>
                        <th>Psicológico</th>
                        <th>Socioassistencial</th>
                        <th>Jurídico</th>
                        <th>Tendência</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.cramBalanco.atendimentosMensais.map(function(m, i) {
                        var badgeColor = function(v) {
                          if (v === 'Alto' || v === 'Muito Alto') return 'var(--color-primary)';
                          return 'var(--color-orange)';
                        };
                        return React.createElement('tr', { key: i },
                          React.createElement('td', { style: { fontWeight: 700, color: 'var(--color-primary)' } }, m.mes),
                          React.createElement('td', null,
                            React.createElement('span', { style: { padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, background: badgeColor(m.psicologico) + '15', color: badgeColor(m.psicologico) } }, m.psicologico)
                          ),
                          React.createElement('td', null,
                            React.createElement('span', { style: { padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, background: badgeColor(m.socioassistencial) + '15', color: badgeColor(m.socioassistencial) } }, m.socioassistencial)
                          ),
                          React.createElement('td', null,
                            React.createElement('span', { style: { padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, background: badgeColor(m.juridico) + '15', color: badgeColor(m.juridico) } }, m.juridico)
                          ),
                          React.createElement('td', null,
                            React.createElement('span', { style: { padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: m.tendencia === 'Muito Alto' ? 'rgba(0,105,102,0.15)' : badgeColor(m.tendencia) + '15', color: m.tendencia === 'Muito Alto' ? 'var(--color-primary)' : badgeColor(m.tendencia) } }, m.tendencia)
                          )
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <SectionDivider />

            {/* SEC 4: Taxas */}
            {d.cramBalanco && d.cramBalanco.taxas && (
              <div id="sec-taxas" style={{ marginBottom: '4rem' }}>
                <SectionBadge label="Indicadores CRAM" />
                <div className="dashboard-kpi-panel" style={{ marginBottom: '0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {d.cramBalanco.taxas.map(function(t, idx) {
                      var isNeg = idx === 0;
                      var glowColor = isNeg ? 'rgba(255,140,66,0.3)' : 'rgba(0,105,102,0.3)';
                      return React.createElement('div', { key: idx, style: { textAlign: 'center' } },
                        React.createElement('div', { style: { position: 'relative', width: '120px', height: '120px', margin: '0 auto 1rem' } },
                          React.createElement('svg', { viewBox: '0 0 120 120', style: { width: 120, height: 120, transform: 'rotate(-90deg)' } },
                            React.createElement('circle', { cx: '60', cy: '60', r: '50', fill: 'none', stroke: 'rgba(255,255,255,0.08)', strokeWidth: '10' }),
                            React.createElement('circle', { cx: '60', cy: '60', r: '50', fill: 'none', stroke: idx === 0 ? '#FF8C42' : '#A8E6CF', strokeWidth: '10', strokeDasharray: Math.PI * 100 * t.valor / 100 + ' ' + Math.PI * 100 * (1 - t.valor / 100), strokeLinecap: 'round', filter: 'drop-shadow(0 0 8px ' + glowColor + ')' })
                          ),
                          React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } },
                            React.createElement('span', { style: { fontSize: '1.5rem', fontWeight: 800, color: idx === 0 ? 'var(--color-orange)' : 'var(--color-mint)' } }, t.label),
                            React.createElement('span', { style: { fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' } }, t.nome)
                          )
                        ),
                        React.createElement('p', { style: { fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '220px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 } },
                          idx === 0
                            ? 'Mulheres que não compareceram ou abandonaram o acompanhamento'
                            : 'Mulheres que permanecem no ciclo de violência mesmo após acolhimento'
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <SectionDivider />

            {/* SEC 5: Programas */}
            {d.programas && (
              <div id="sec-programas" style={{ marginBottom: '4rem' }}>
                <SectionBadge label="Serviços Municipais" />
                <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, color: 'var(--color-gray-900)', letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>Programas para Mulheres</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-500)', fontSize: '0.875rem', margin: '0 0 2rem' }}>Rede municipal de proteção e cidadania feminina</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {d.programas.map(function(p, idx) {
                    return React.createElement('div', { key: idx, className: 'dashboard-card animate-fade-in-up', style: { animationDelay: idx * 60 + 'ms', display: 'flex', flexDirection: 'column' } },
                      React.createElement('div', { style: { width: '48px', height: '48px', borderRadius: '12px', background: idx % 2 === 0 ? 'linear-gradient(135deg, var(--color-primary), var(--color-mint))' : 'linear-gradient(135deg, var(--color-orange), var(--color-amber))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '0.75rem', boxShadow: idx % 2 === 0 ? '0 4px 12px rgba(0,105,102,0.25)' : '0 4px 12px rgba(255,140,66,0.25)' } },
                        getIcon(idx === 0 ? 'shelter' : idx === 1 ? 'shield' : idx === 2 ? 'heart' : idx === 3 ? 'briefcase' : idx === 4 ? 'baby' : 'heart') || null
                      ),
                      React.createElement('h3', { style: { fontSize: '1rem', fontWeight: 700, color: 'var(--color-gray-900)', margin: '0 0 0.4rem' } }, p.nome),
                      React.createElement('p', { style: { fontSize: '0.8125rem', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.6, flex: 1 } }, p.descricao)
                    );
                  })}
                </div>
              </div>
            )}

            <SectionDivider />

            {/* SEC 6: Notícias */}
            {d.noticias && (
              <div id="sec-noticias" style={{ marginBottom: '4rem' }}>
                <SectionBadge label="Últimas Notícias" />
                <div className="dashboard-card card-neon" style={{ padding: 0, overflow: 'hidden' }}>
                  {d.noticias.map(function(n, idx) {
                    return React.createElement('a', {
                      key: idx,
                      href: n.url,
                      target: '_blank',
                      rel: 'noopener',
                      style: {
                        display: 'block', padding: '1rem 1.5rem', textDecoration: 'none',
                        borderBottom: idx < d.noticias.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
                        transition: 'background 0.15s'
                      }
                    },
                      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' } },
                        React.createElement('div', { style: { flex: 1 } },
                          React.createElement('div', { style: { fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-gray-900)', marginBottom: '0.2rem' } }, n.titulo),
                          React.createElement('div', { style: { display: 'flex', gap: '0.75rem', alignItems: 'center' } },
                            React.createElement('span', { style: { fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '9999px', background: 'rgba(0,105,102,0.08)', color: 'var(--color-primary)', fontWeight: 600 } }, n.categoria),
                            React.createElement('span', { style: { fontSize: '0.7rem', color: 'var(--color-gray-400)' } }, n.data)
                          )
                        ),
                        React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--color-gray-300)', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', style: { flexShrink: 0, marginTop: '4px' } },
                          React.createElement('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }),
                          React.createElement('polyline', { points: '15 3 21 3 21 9' }),
                          React.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' })
                        )
                      )
                    );
                  })}
                </div>
              </div>
            )}

            <SectionDivider />

            {/* SEC 7: Canais */}
            {d.canaisApoio && (
              <div id="sec-canais" style={{ marginBottom: '2rem' }}>
                <SectionBadge label="Canais de Apoio" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  {d.canaisApoio.map(function(c, idx) {
                    return React.createElement('div', { key: idx, className: 'dashboard-card', style: { textAlign: 'center', cursor: 'default', borderLeft: '4px solid ' + c.cor } },
                      React.createElement('div', { style: { fontWeight: 800, fontSize: '1.25rem', color: c.cor, marginBottom: '0.25rem' } }, c.canal),
                      React.createElement('div', { style: { fontSize: '0.8125rem', color: 'var(--color-gray-600)' } }, c.descricao)
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </section>
      )}
    </div>
  );
};
