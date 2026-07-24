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

var _uid = 0;

function neonFilter(id, color, blur) {
  blur = blur || 3;
  return React.createElement('filter', { key: id, id: id, x: '-30%', y: '-30%', width: '160%', height: '160%' },
    React.createElement('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: blur, result: 'b1' }),
    React.createElement('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: blur * 2, result: 'b2' }),
    React.createElement('feMerge', null,
      React.createElement('feMergeNode', { in: 'b2' }),
      React.createElement('feMergeNode', { in: 'b1' }),
      React.createElement('feMergeNode', { in: 'SourceGraphic' })
    )
  );
}

function rawSvg(path, w, h) {
  return { __html: path };
}

function ArrowUpIcon() {
  return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '3', strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('polyline', { points: '18 15 12 9 6 15' })
  );
}

function ArrowDownIcon() {
  return React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '3', strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('polyline', { points: '6 9 12 15 18 9' })
  );
}

function TrendArrow(props) {
  var up = props.up;
  var color = up ? 'var(--color-primary)' : 'var(--color-orange)';
  var bg = up ? 'linear-gradient(135deg, var(--color-primary), var(--color-mint))' : 'linear-gradient(135deg, var(--color-orange), var(--color-amber))';
  return React.createElement('div', {
    style: {
      width: '40px', height: '40px', borderRadius: '12px',
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'white', flexShrink: 0,
      boxShadow: up
        ? '0 4px 12px rgba(0,105,102,0.3), 0 0 20px rgba(168,230,207,0.15)'
        : '0 4px 12px rgba(255,140,66,0.3), 0 0 20px rgba(255,209,102,0.15)'
    }
  }, up ? React.createElement(ArrowUpIcon, null) : React.createElement(ArrowDownIcon, null));
}

function GradientDefs(props) {
  var u = props.uid;
  return React.createElement('defs', null,
    React.createElement('linearGradient', { id: 'gp' + u, x1: '0', y1: '0', x2: '1', y2: '1' },
      React.createElement('stop', { offset: '0%', stopColor: '#006966' }),
      React.createElement('stop', { offset: '100%', stopColor: '#008580' })
    ),
    React.createElement('linearGradient', { id: 'go' + u, x1: '0', y1: '0', x2: '1', y2: '1' },
      React.createElement('stop', { offset: '0%', stopColor: '#FF8C42' }),
      React.createElement('stop', { offset: '100%', stopColor: '#FFD166' })
    ),
    React.createElement('linearGradient', { id: 'gm' + u, x1: '0', y1: '0', x2: '1', y2: '1' },
      React.createElement('stop', { offset: '0%', stopColor: '#A8E6CF' }),
      React.createElement('stop', { offset: '100%', stopColor: '#7FDBC8' })
    ),
    React.createElement('linearGradient', { id: 'ga' + u, x1: '0', y1: '0', x2: '1', y2: '1' },
      React.createElement('stop', { offset: '0%', stopColor: '#FFD166' }),
      React.createElement('stop', { offset: '100%', stopColor: '#FF8C42' })
    ),
    React.createElement('linearGradient', { id: 'tg' + u, x1: '0', y1: '0', x2: '0', y2: '1' },
      React.createElement('stop', { offset: '0%', stopColor: '#006966', stopOpacity: 0.45 }),
      React.createElement('stop', { offset: '40%', stopColor: '#006966', stopOpacity: 0.15 }),
      React.createElement('stop', { offset: '100%', stopColor: '#006966', stopOpacity: 0.02 })
    ),
    neonFilter('nb' + u, '#006966', 4),
    neonFilter('ng' + u, '#006966', 3),
    neonFilter('no' + u, '#FF8C42', 3),
    neonFilter('nm' + u, '#7FDBC8', 4),
    neonFilter('nl' + u, '#006966', 5),
    neonFilter('np' + u, '#008580', 4)
  );
}

// ---- Sector Bar Chart ----
function SectorBarChart(props) {
  var sectors = props.sectors || [];
  if (sectors.length === 0) return null;
  var maxGrowth = Math.max.apply(null, sectors.map(function(s) { return s.growth; }));
  var barHeight = 36;
  var gap = 12;
  var labelW = 140;
  var chartH = sectors.length * (barHeight + gap);
  var u = props.uid;

  return React.createElement('svg', { viewBox: '0 0 600 ' + chartH, style: { width: '100%', maxWidth: 600 }, height: chartH },
    React.createElement(GradientDefs, { uid: u + 's' }),
    sectors.map(function(s, i) {
      var y = i * (barHeight + gap);
      var barW = (s.growth / maxGrowth) * 400;
      return [
        React.createElement('text', { key: 'l' + i, x: 0, y: y + barHeight / 2 + 4, fontSize: 12, fontWeight: 700, fill: '#343A40', dominantBaseline: 'middle' }, s.sector),
        React.createElement('rect', { key: 'bg' + i, x: labelW + 1, y: y + 3, width: Math.max(barW, 4), height: barHeight - 6, rx: 6, fill: 'rgba(0,0,0,0.04)' }),
        React.createElement('rect', { key: 'b' + i, x: labelW, y: y + 2, width: Math.max(barW, 4), height: barHeight - 4, rx: 6, fill: 'url(#gp' + u + 's)', opacity: 0.9, filter: 'url(#nb' + u + 's)' }),
        React.createElement('rect', { key: 'bs' + i, x: labelW, y: y + 2, width: Math.max(barW, 4), height: barHeight - 4, rx: 6, fill: 'url(#gp' + u + 's)', opacity: 1 }),
        React.createElement('text', { key: 'v' + i, x: labelW + barW + 10, y: y + barHeight / 2 + 4, fontSize: 13, fontWeight: 800, fill: '#006966', dominantBaseline: 'middle', filter: 'url(#ng' + u + 's)' }, s.display),
      ];
    })
  );
}

// ---- Trend Chart ----
function TrendChart(props) {
  var data = props.data || [];
  if (data.length < 2) return null;
  var w = 600, h = 220, pad = { top: 20, right: 20, bottom: 45, left: 45 };
  var innerW = w - pad.left - pad.right;
  var innerH = h - pad.top - pad.bottom;
  var values = data.map(function(d) { return d.empresas; });
  var maxVal = Math.max.apply(null, values);
  var minVal = Math.min.apply(null, values);
  var range = maxVal - minVal || 1;
  var padding = range * 0.12;
  var yMin = Math.max(0, minVal - padding);
  var yMax = maxVal + padding;
  var yRange = yMax - yMin;
  var xStep = innerW / (data.length - 1);
  var u = props.uid;

  var pts = data.map(function(d, i) {
    var x = pad.left + i * xStep;
    var y = pad.top + innerH - ((d.empresas - yMin) / yRange) * innerH;
    return (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
  }).join(' ');

  var area = pts + ' L' + (pad.left + (data.length - 1) * xStep).toFixed(1) + ',' + (pad.top + innerH) + ' L' + pad.left + ',' + (pad.top + innerH) + ' Z';

  var gradValues = data.map(function(d) { return d.empresas; });

  return React.createElement('svg', { viewBox: '0 0 ' + w + ' ' + h, style: { width: '100%', maxWidth: w }, height: h },
    React.createElement(GradientDefs, { uid: u + 't' }),
    React.createElement('path', { d: area, fill: 'url(#tg' + u + 't)' }),
    React.createElement('path', { d: pts, fill: 'none', stroke: '#006966', strokeWidth: 3.5, strokeLinejoin: 'round', filter: 'url(#nl' + u + 't)' }),
    React.createElement('path', { d: pts, fill: 'none', stroke: '#006966', strokeWidth: 3, strokeLinejoin: 'round' }),
    data.map(function(d, i) {
      var x = pad.left + i * xStep;
      var y = pad.top + innerH - ((d.empresas - yMin) / yRange) * innerH;
      return React.createElement('g', { key: i },
        React.createElement('text', { x: x, y: pad.top + innerH + 18, fontSize: 10, fill: '#6C757D', textAnchor: 'middle', fontWeight: 500 }, d.quarter.substring(0, 7)),
        React.createElement('circle', { cx: x, cy: y, r: 6, fill: '#006966', filter: 'url(#nl' + u + 't)' }),
        React.createElement('circle', { cx: x, cy: y, r: 4, fill: '#006966', stroke: '#A8E6CF', strokeWidth: 2 }),
        React.createElement('text', { x: x, y: y - 14, fontSize: 11, fontWeight: 800, fill: '#004D4A', textAnchor: 'middle', filter: 'url(#ng' + u + 't)' }, d.empresas)
      );
    })
  );
}

// ---- Jobs Chart ----
function JobsChart(props) {
  var data = props.data || [];
  if (data.length === 0) return null;
  var maxVal = Math.max.apply(null, data.map(function(d) { return d.admitidos; }));
  var barH = 32;
  var gap = 10;
  var labelW = 110;
  var chartH = data.length * (barH + gap);
  var u = props.uid;

  return React.createElement('svg', { viewBox: '0 0 600 ' + chartH, style: { width: '100%', maxWidth: 600 }, height: chartH },
    React.createElement(GradientDefs, { uid: u + 'j' }),
    data.map(function(d, i) {
      var y = i * (barH + gap);
      var wAdm = (d.admitidos / maxVal) * 240;
      var wDem = (d.desligados / maxVal) * 240;
      return [
        React.createElement('text', { key: 'l' + i, x: 0, y: y + barH / 2 + 4, fontSize: 11, fontWeight: 700, fill: '#343A40', dominantBaseline: 'middle' }, d.sector),
        React.createElement('rect', { key: 'abg' + i, x: labelW + 1, y: y + 2, width: Math.max(wAdm, 3), height: barH / 2 - 3, rx: 4, fill: 'rgba(0,105,102,0.08)' }),
        React.createElement('rect', { key: 'a' + i, x: labelW, y: y + 1, width: Math.max(wAdm, 3), height: barH / 2 - 2, rx: 4, fill: 'url(#gp' + u + 'j)', filter: 'url(#ng' + u + 'j)' }),
        React.createElement('rect', { key: 'as' + i, x: labelW, y: y + 1, width: Math.max(wAdm, 3), height: barH / 2 - 2, rx: 4, fill: 'url(#gp' + u + 'j)' }),
        React.createElement('rect', { key: 'dbg' + i, x: labelW + 1, y: y + barH / 2 + 3, width: Math.max(wDem, 3), height: barH / 2 - 3, rx: 4, fill: 'rgba(255,140,66,0.08)' }),
        React.createElement('rect', { key: 'd' + i, x: labelW, y: y + barH / 2 + 2, width: Math.max(wDem, 3), height: barH / 2 - 2, rx: 4, fill: 'url(#ga' + u + 'j)', filter: 'url(#no' + u + 'j)' }),
        React.createElement('rect', { key: 'ds' + i, x: labelW, y: y + barH / 2 + 2, width: Math.max(wDem, 3), height: barH / 2 - 2, rx: 4, fill: 'url(#ga' + u + 'j)' }),
        React.createElement('text', { key: 'at' + i, x: labelW + 6, y: y + barH / 4 + 4, fontSize: 8, fill: 'white', fontWeight: 700 }, 'Adm: ' + d.admitidos),
        React.createElement('text', { key: 'dt' + i, x: labelW + 6, y: y + barH - 5, fontSize: 8, fill: 'white', fontWeight: 700 }, 'Dem: ' + d.desligados),
        React.createElement('text', { key: 's' + i, x: labelW + 255, y: y + barH / 2 + 4, fontSize: 14, fontWeight: 800, fill: d.saldo > 0 ? '#006966' : '#FF8C42', dominantBaseline: 'middle', filter: d.saldo > 0 ? 'url(#ng' + u + 'j)' : 'url(#no' + u + 'j)' }, (d.saldo > 0 ? '+' : '') + d.saldo),
      ];
    })
  );
}

// ---- Norm Pages ----
function normalizePages(raw) {
  if (!raw) return null;
  if (raw.pages) return raw;
  var pageMap = {
    stats: { id: 1, title: 'Visão Geral', icon: 'chart', description: 'Principais indicadores macroeconômicos de Aracaju' },
    sectors: { id: 2, title: 'Crescimento Setorial', icon: 'trending', description: 'Variação percentual na abertura de novas empresas por setor' },
    indicators: { id: 3, title: 'Indicadores Econômicos', icon: 'bar', description: 'Taxas e valores referenciais da economia municipal' },
    quarterlyTrend: { id: 4, title: 'Tendência Trimestral', icon: 'line', description: 'Evolução trimestral do registro de novas empresas' },
    jobsBySector: { id: 5, title: 'Mercado de Trabalho', icon: 'users', description: 'Geração de empregos formais por setor' },
    publicFinances: { id: 6, title: 'Finanças Públicas', icon: 'dollar', description: 'Receita e despesa municipal' },
    creditData: { id: 7, title: 'Investimentos & Crédito', icon: 'bank', description: 'Microcrédito, financiamentos e investimentos privados' },
    yearlyComparison: { id: 8, title: 'Comparativo Anual', icon: 'calendar', description: 'Evolução ano a ano dos principais indicadores' }
  };
  var out = [];
  Object.keys(pageMap).forEach(function(key) {
    if (raw[key]) {
      var def = pageMap[key];
      var entry = { id: def.id, title: def.title, icon: def.icon, description: def.description };
      entry[key] = raw[key];
      if (key === 'stats' && raw.insight) entry.insight = raw.insight;
      if (key === 'jobsBySector' && raw.totalSaldo) entry.totalSaldo = raw.totalSaldo;
      if (key === 'creditData' && raw.totalContratacoes) entry.totalContratacoes = raw.totalContratacoes;
      out.push(entry);
    }
  });
  if (out.length === 0) return raw;
  return { pages: out, totalPages: out.length, updatedAt: raw.updatedAt, source: raw.source || 'legacy' };
}

// ---- Section header ----
function SectionHeader(props) {
  var p = props.page;
  var idx = props.index;
  var total = props.total;
  return React.createElement('div', { style: { textAlign: 'center', marginBottom: '2rem', position: 'relative' } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' } },
      React.createElement('div', { style: { height: '1px', flex: '1', maxWidth: '80px', background: 'linear-gradient(90deg, transparent, var(--color-primary))' } }),
      React.createElement('span', { className: 'section-badge', style: { background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', color: 'white', padding: '0.3rem 1.2rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', boxShadow: '0 2px 10px rgba(0,105,102,0.2)' } },
        'Seção ' + (idx + 1) + ' de ' + total
      ),
      React.createElement('div', { style: { height: '1px', flex: '1', maxWidth: '80px', background: 'linear-gradient(90deg, var(--color-primary), transparent)' } }),
    ),
    React.createElement('h2', { style: { fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 800, color: 'var(--color-gray-900)', margin: '0 0 0.4rem', letterSpacing: '-0.02em' } }, p.title),
    p.description
      ? React.createElement('p', { style: { color: 'var(--color-gray-500)', margin: 0, fontSize: '0.9375rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' } }, p.description)
      : null,
    React.createElement('div', { style: { height: '3px', width: '48px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-mint))', borderRadius: '9999px', margin: '1rem auto 0' } })
  );
}

// ---- Section divider ----
function SectionDivider() {
  return React.createElement('div', { style: { height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,105,102,0.1), var(--color-primary), rgba(0,105,102,0.1), transparent)', margin: '2rem 0 3rem' } });
}

// ---- Render a page ----
function renderPageContent(page, uidRef) {
  if (!page) return null;
  var u = uidRef.current;
  var sections = [];

  // PAGE 1: Visão Geral — KPIs
  if (page.stats) {
    sections.push(
      React.createElement('div', { key: 'kpi-' + page.id, className: 'dashboard-kpi-panel animate-fade-in-up', style: { marginBottom: '3.5rem' } },
        React.createElement('div', { className: 'kpi-grid' },
          page.stats.map(function(stat, idx) {
            return React.createElement('div', { key: idx, className: 'kpi-card ' + (idx % 2 === 0 ? 'dark' : 'amber') },
              React.createElement('div', { className: 'kpi-value' }, stat.value),
              React.createElement('div', { className: 'kpi-label' }, stat.label),
              React.createElement('p', { className: 'kpi-sublabel' }, stat.sublabel)
            );
          })
        )
      )
    );
  }

  // PAGE 2: Crescimento Setorial
  if (page.sectors) {
    sections.push(
      React.createElement('div', { key: 'sectors-' + page.id, className: 'dashboard-card card-neon', style: { marginBottom: '3rem' } },
        React.createElement(SectorBarChart, { sectors: page.sectors, uid: u + 's' })
      )
    );
  }

  // PAGE 3: Indicadores Econômicos
  if (page.indicators) {
    sections.push(
      React.createElement('div', { key: 'indicators-' + page.id, className: 'dashboard-card card-neon', style: { marginBottom: '3rem', padding: 0, overflow: 'hidden' } },
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' } },
          page.indicators.map(function(ind, i) {
            var up = ind.direction === 'up';
            var accentColor = up ? 'var(--color-primary)' : 'var(--color-orange)';
            var bgColor = up ? 'rgba(0,105,102,0.03)' : 'rgba(255,140,66,0.03)';
            return React.createElement('div', {
              key: i,
              style: {
                borderBottom: i < page.indicators.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
                borderRight: (i % 2 === 0 && i < page.indicators.length - 1) ? '1px solid var(--color-gray-100)' : 'none',
                padding: '1.25rem 1.5rem',
                background: bgColor,
                display: 'flex', alignItems: 'center', gap: '1rem'
              }
            },
              React.createElement(TrendArrow, { up: up }),
              React.createElement('div', { style: { flex: 1, minWidth: 0 } },
                React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.25rem' } },
                  React.createElement('span', { style: { fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-gray-800)' } }, ind.name),
                  React.createElement('span', { style: { fontSize: '0.7rem', color: 'var(--color-gray-400)', fontWeight: 500, letterSpacing: '0.02em' } }, ind.period)
                ),
                React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.25rem' } },
                  React.createElement('span', { style: { fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gray-900)', letterSpacing: '-0.02em' } }, ind.value),
                  React.createElement('span', {
                    style: {
                      fontSize: '0.8125rem', fontWeight: 700, color: accentColor,
                      background: up ? 'rgba(0,105,102,0.08)' : 'rgba(255,140,66,0.1)',
                      padding: '0.2rem 0.7rem', borderRadius: '9999px'
                    }
                  }, ind.change)
                )
              )
            );
          })
        )
      )
    );
  }

  // PAGE 4: Tendência Trimestral
  if (page.quarterlyTrend) {
    sections.push(
      React.createElement('div', { key: 'trend-' + page.id, className: 'dashboard-card card-neon', style: { marginBottom: '3rem' } },
        React.createElement(TrendChart, { data: page.quarterlyTrend, uid: u + 't' })
      )
    );
  }

  // PAGE 5: Mercado de Trabalho
  if (page.jobsBySector) {
    var jobsContent = [];
    jobsContent.push(
      React.createElement('div', { key: 'chart', className: 'dashboard-card', style: { marginBottom: '1.5rem', background: 'linear-gradient(135deg, rgba(0,105,102,0.02), rgba(127,219,200,0.04))' } },
        React.createElement(JobsChart, { data: page.jobsBySector, uid: u + 'j' })
      )
    );
    jobsContent.push(
      React.createElement('div', { key: 'table', className: 'dashboard-card card-neon', style: { overflowX: 'auto' } },
        React.createElement('table', { className: 'dashboard-table dashboard-table-neon' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', null, 'Setor'),
              React.createElement('th', null, 'Admitidos'),
              React.createElement('th', null, 'Desligados'),
              React.createElement('th', null, 'Saldo')
            )
          ),
          React.createElement('tbody', null,
            page.jobsBySector.map(function(j, i) {
              return React.createElement('tr', { key: i },
                React.createElement('td', { style: { fontWeight: 600 } }, j.sector),
                React.createElement('td', null, j.admitidos.toLocaleString('pt-BR')),
                React.createElement('td', null, j.desligados.toLocaleString('pt-BR')),
                React.createElement('td', { style: { color: j.saldo > 0 ? 'var(--color-primary)' : 'var(--color-orange)', fontWeight: 700 } }, (j.saldo > 0 ? '+' : '') + j.saldo)
              );
            })
          )
        )
      )
    );
    if (page.totalSaldo) {
      jobsContent.push(
        React.createElement('div', { key: 'total', className: 'dashboard-card', style: { marginTop: '1rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,105,102,0.04), rgba(127,219,200,0.06))', borderLeft: '4px solid var(--color-primary)' } },
          React.createElement('span', { style: { fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' } },
            'Saldo total: +' + page.totalSaldo.toLocaleString('pt-BR') + ' empregos formais'
          )
        )
      );
    }
    sections.push(
      React.createElement('div', { key: 'jobs-' + page.id, style: { marginBottom: '3rem' } }, jobsContent)
    );
  }

  // PAGE 6: Finanças Públicas
  if (page.publicFinances) {
    sections.push(
      React.createElement('div', { key: 'finances-' + page.id, className: 'dashboard-card card-neon', style: { overflowX: 'auto', marginBottom: '3rem' } },
        React.createElement('table', { className: 'dashboard-table dashboard-table-neon' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', null, 'Categoria'),
              React.createElement('th', null, 'Realizado'),
              React.createElement('th', null, 'Crescimento'),
              React.createElement('th', null, 'Participação')
            )
          ),
          React.createElement('tbody', null,
            page.publicFinances.map(function(f, i) {
              return React.createElement('tr', { key: i },
                React.createElement('td', { style: { fontWeight: 600 } }, f.category),
                React.createElement('td', { style: { fontWeight: 700 } }, f.realizado),
                React.createElement('td', { style: { color: f.crescimento.indexOf('+') === 0 ? 'var(--color-primary)' : 'var(--color-orange)', fontWeight: 600 } }, f.crescimento),
                React.createElement('td', null, f.participacao)
              );
            })
          )
        )
      )
    );
  }

  // PAGE 7: Investimentos & Crédito
  if (page.creditData) {
    var creditContent = [];
    creditContent.push(
      React.createElement('div', { key: 'table', className: 'dashboard-card card-neon', style: { overflowX: 'auto', marginBottom: '1.5rem' } },
        React.createElement('table', { className: 'dashboard-table dashboard-table-neon' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', null, 'Programa'),
              React.createElement('th', null, 'Contratações'),
              React.createElement('th', null, 'Valor Total'),
              React.createElement('th', null, 'Alcance')
            )
          ),
          React.createElement('tbody', null,
            page.creditData.map(function(c, i) {
              return React.createElement('tr', { key: i },
                React.createElement('td', { style: { fontWeight: 600 } }, c.programa),
                React.createElement('td', null, c.contratacoes.toLocaleString('pt-BR')),
                React.createElement('td', { style: { fontWeight: 700 } }, c.valorTotal),
                React.createElement('td', null, c.alcance)
              );
            })
          )
        )
      )
    );
    if (page.totalContratacoes) {
      creditContent.push(
        React.createElement('div', { key: 'total', className: 'dashboard-card', style: { textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,105,102,0.04), rgba(255,209,102,0.06))', borderLeft: '4px solid var(--color-amber)' } },
          React.createElement('span', { style: { fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' } },
            'Total: ' + page.totalContratacoes.toLocaleString('pt-BR') + ' contratações'
          )
        )
      );
    }
    sections.push(
      React.createElement('div', { key: 'credit-' + page.id, style: { marginBottom: '3rem' } }, creditContent)
    );
  }

  // PAGE 8: Comparativo Anual
  if (page.yearlyComparison) {
    sections.push(
      React.createElement('div', { key: 'yearly-' + page.id, className: 'dashboard-card card-neon', style: { overflowX: 'auto', marginBottom: '3rem' } },
        React.createElement('table', { className: 'dashboard-table dashboard-table-neon' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', null, 'Ano'),
              React.createElement('th', null, 'PIB Municipal'),
              React.createElement('th', null, 'Empresas Abertas'),
              React.createElement('th', null, 'Empregos Gerados'),
              React.createElement('th', null, 'Investimentos')
            )
          ),
          React.createElement('tbody', null,
            page.yearlyComparison.map(function(y, i) {
              return React.createElement('tr', { key: i },
                React.createElement('td', { style: { fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-primary)' } }, y.ano),
                React.createElement('td', { style: { fontWeight: 600 } }, y.pibMunicipal),
                React.createElement('td', null, y.empresasAbertas.toLocaleString('pt-BR')),
                React.createElement('td', null, (y.empregosGerados / 1000).toFixed(1) + 'k'),
                React.createElement('td', { style: { fontWeight: 600 } }, y.investimentos)
              );
            })
          )
        )
      )
    );
  }

  // Insight
  if (page.insight) {
    sections.push(
      React.createElement('div', { key: 'insight-' + page.id, className: 'dashboard-card', style: {
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, rgba(0,105,102,0.04), rgba(168,230,207,0.06))',
        borderLeft: '4px solid var(--color-primary)',
        boxShadow: '0 4px 20px rgba(0,105,102,0.06), 0 0 30px rgba(168,230,207,0.04)'
      } },
        React.createElement('div', { style: { display: 'flex', gap: '0.75rem', alignItems: 'flex-start' } },
          React.createElement('span', { style: { color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px', filter: 'drop-shadow(0 0 6px rgba(0,105,102,0.25))' } },
            React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
              React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
              React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
              React.createElement('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' })
            )
          ),
          React.createElement('div', null,
            React.createElement('div', { style: { fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-primary)', marginBottom: '0.25rem' } }, 'Insight'),
            React.createElement('p', { style: { fontSize: '0.9375rem', margin: 0 } }, page.insight)
          )
        )
      )
    );
  }

  return sections;
}

// ---- Fallback ----
var fallbackData = {
  pages: [
    {
      id: 1, title: 'Visão Geral', icon: 'chart', description: 'Carregando...',
      stats: [
        { value: '35,5%', label: 'PIB Sergipe', sublabel: 'Concentrado em Aracaju' },
        { value: '898', label: 'Novas Empresas', sublabel: 'Empresas abertas em 2025' },
        { value: '97,4%', label: 'Microempresas', sublabel: 'Força do empreendedorismo local' },
        { value: 'R$ 300Mi', label: 'Microcrédito', sublabel: 'Crediamigo em Sergipe' }
      ],
      insight: 'Aracaju concentra mais de um terço de todo o PIB estadual.'
    }
  ],
  totalPages: 1,
  updatedAt: null,
  source: 'fallback'
};

// ---- Component ----
export var EconomyPage = function() {
  var { data, loading, error } = useApi('/api/economia/dashboard');
  var allData = normalizePages(data) || fallbackData;
  var pages = (allData.pages || []);
  var uidRef = React.useRef(null);
  if (!uidRef.current) uidRef.current = ++_uid;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #ffffff 0%, var(--color-gray-50) 50%, #ffffff 100%)' }}>
      <section className="hero" style={{ minHeight: '38vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(0,105,102,0.04) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(168,230,207,0.03) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="hero-badge" style={{ boxShadow: '0 2px 12px rgba(0,105,102,0.12), 0 0 20px rgba(0,105,102,0.06)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Dashboard Econômico
            </div>
            <h1 className="hero-title" style={{ textShadow: '0 2px 20px rgba(0,105,102,0.08)' }}>Setor <span style={{ color: 'var(--color-primary)', textShadow: '0 0 30px rgba(0,105,102,0.15)' }}>Econômico</span></h1>
            <p className="hero-subtitle">PIB, empreendedorismo e indicadores de desenvolvimento econômico</p>
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
            <p style={{ color: 'var(--color-orange)', fontSize: '1rem' }}>API indisponível — exibindo dados locais</p>
          </div>
        </section>
      )}

      {!loading && pages.length > 0 && (
        <section className="section section-dashboard" style={{ paddingTop: '2.5rem' }}>
          <div className="container">
            {allData.updatedAt && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', background: 'var(--color-gray-100)', padding: '0.25rem 1rem', borderRadius: '9999px', fontWeight: 500 }}>
                  Última atualização: {new Date(allData.updatedAt).toLocaleString('pt-BR')}
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
                {pages.map(function(p, i) {
                  var colors = ['#006966', '#008580', '#7FDBC8', '#A8E6CF', '#FFD166', '#FF8C42', '#FFC233', '#004D4A'];
                  return React.createElement('a', {
                    key: p.id,
                    href: '#section-' + p.id,
                    style: {
                      padding: '0.45rem 1rem', borderRadius: '9999px',
                      background: i === 0 ? 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' : 'var(--color-gray-100)',
                      color: i === 0 ? 'white' : 'var(--color-gray-700)',
                      fontWeight: 600, fontSize: '0.8125rem', textDecoration: 'none',
                      transition: 'all 0.15s',
                      borderLeft: i > 0 ? '3px solid ' + colors[i % colors.length] : 'none'
                    }
                  }, (i + 1) + '. ' + p.title);
                })}
              </div>
            </div>

            {/* ALL PAGES */}
            {pages.map(function(p, idx) {
              return React.createElement('div', {
                key: p.id,
                id: 'section-' + p.id,
                style: { marginBottom: idx < pages.length - 1 ? '4rem' : '1rem' }
              },
                React.createElement(SectionHeader, { page: p, index: idx, total: pages.length }),
                idx > 0 ? React.createElement(SectionDivider, null) : null,
                renderPageContent(p, uidRef)
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
