import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HealthPage } from './pages/HealthPage';
import { EducationPage } from './pages/EducationPage';
import { TourismPage } from './pages/TourismPage';
import { EconomyPage } from './pages/EconomyPage';

function useCounter(end, duration) {
  var frameRef = useRef(0);
  var [value, setValue] = useState(0);
  useEffect(function() {
    var startTime = null;
    var animate = function(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return function() { cancelAnimationFrame(frameRef.current); };
  }, [end, duration]);
  return value;
}

var sparklineData = [
  [12, 18, 14, 22, 20, 28, 24, 32],
  [8, 12, 18, 14, 22, 20, 26, 30],
  [15, 10, 18, 14, 22, 20, 24, 28],
  [6, 14, 10, 18, 16, 22, 20, 26],
];

function SparklineBars(props) {
  var data = props.data || [4, 8, 6, 12, 10, 14, 12, 18];
  var max = Math.max.apply(null, data);
  return React.createElement('div', { className: 'kpi-sparkline', 'aria-hidden': 'true' },
    data.map(function(v, i) {
      var h = Math.max(4, (v / max) * 28);
      return React.createElement('span', {
        key: i,
        className: 'kpi-sparkline-bar',
        style: { height: h + 'px', opacity: 0.3 + (v / max) * 0.5 }
      });
    })
  );
}

var kpis = [
  { value: 355, suffix: '%', label: 'PIB de Sergipe em Aracaju', change: '+2.3%', up: true, icon: 'chart', variant: 'dark', sparkline: sparklineData[0] },
  { value: 898, suffix: '', label: 'Novas Empresas em 2025', change: '+18%', up: true, icon: 'building', variant: 'amber', sparkline: sparklineData[1] },
  { value: 42, suffix: 'k', label: 'Alunos Matriculados', change: '+5%', up: true, icon: 'users', variant: 'light', sparkline: sparklineData[2] },
  { value: 152, suffix: 'k', label: 'Visitantes Mensais', change: '+32%', up: true, icon: 'globe', variant: 'dark', sparkline: sparklineData[3] },
];

var services = [
  { title: 'Saude Publica', description: 'Dados sobre unidades de saude, vacinacao, atendimentos e indicadores epidemiologicos de Aracaju.', icon: 'health', path: 'saude' },
  { title: 'Educacao', description: 'Escolas municipais, matriculas, desempenho academico e infraestrutura educacional.', icon: 'education', path: 'educacao' },
  { title: 'Turismo', description: 'Atrativos turisticos, visitantes, ocupacao hoteleira e impacto economico do turismo.', icon: 'tourism', path: 'turismo' },
  { title: 'Economia', description: 'PIB, empregos, microcreditos e indicadores de desenvolvimento economico local.', icon: 'economy', path: 'economia' },
  { title: 'Dados Abertos', description: 'Acesse conjuntos de dados publicos para pesquisas, estudos e desenvolvimento de solucoes.', icon: 'data', path: 'home' },
  { title: 'Transparencia', description: 'Acompanhe gastos publicos, licitacoes, contratos e prestacao de contas municipais.', icon: 'transparency', path: 'home' },
];

var news = [
  { title: 'Crescimento de 38,5% no Setor de Tecnologia', description: 'Aracaju lidera crescimento de empresas de tecnologia em Sergipe com 54 novas startups.', tag: 'Economia', date: '10 Jul 2025', color: 'linear-gradient(135deg, #006966, #008580)' },
  { title: 'Cobertura Vacinal atinge 89% na Capital', description: 'Meta de vacinacao infantil superada com campanha de vacinacao municipal.', tag: 'Saude', date: '08 Jul 2025', color: 'linear-gradient(135deg, #7FDBC8, #A8E6CF)' },
  { title: 'Novo Parque Ecologico e Inaugurado', description: 'Parque das Emas ganha nova area de lazer com investimento de R$ 2.5 milhoes.', tag: 'Turismo', date: '05 Jul 2025', color: 'linear-gradient(135deg, #FFD166, #FF8C42)' },
];

function KpiCard(props) {
  var kpi = props.kpi;
  var val = useCounter(kpi.value, 2000);
  var prefix = kpi.value === 355 ? '' : '';
  var icons = {
    chart: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17' }),
      React.createElement('polyline', { points: '16 7 22 7 22 13' })
    ),
    building: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('rect', { x: '4', y: '2', width: '16', height: '20', rx: '2' }),
      React.createElement('path', { d: 'M9 22v-4h6v4' }),
      React.createElement('path', { d: 'M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01' })
    ),
    users: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
      React.createElement('circle', { cx: '9', cy: '7', r: '4' }),
      React.createElement('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
      React.createElement('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ),
    globe: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      React.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
      React.createElement('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
    ),
  };
  var trendIcon = kpi.up
    ? React.createElement('svg', { className: 'kpi-trend-svg', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
        React.createElement('polyline', { points: '17 6 23 6 23 12' })
      )
    : React.createElement('svg', { className: 'kpi-trend-svg', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('polyline', { points: '23 18 13.5 8.5 8.5 13.5 1 6' }),
        React.createElement('polyline', { points: '17 18 23 18 23 12' })
      );
  return React.createElement('div', { className: 'kpi-card ' + kpi.variant + ' animate-fade-in-up', style: { animationDelay: props.delay + 'ms' } },
    React.createElement('div', { className: 'kpi-top' },
      React.createElement('div', { className: 'kpi-icon' }, icons[kpi.icon]),
      React.createElement(SparklineBars, { data: kpi.sparkline })
    ),
    React.createElement('div', { className: 'kpi-body' },
      React.createElement('div', { className: 'kpi-value' }, prefix, val, kpi.suffix),
      React.createElement('div', { className: 'kpi-label' }, kpi.label)
    ),
    React.createElement('div', { className: 'kpi-footer' },
      React.createElement('span', { className: 'kpi-trend ' + (kpi.up ? 'kpi-trend-up' : 'kpi-trend-down') },
        trendIcon,
        kpi.change
      )
    )
  );
}

function ServiceCard(props) {
  var service = props.service;
  var icons = {
    health: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' })
    ),
    education: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
      React.createElement('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
    ),
    tourism: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      React.createElement('path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' }),
      React.createElement('path', { d: 'M2 12h20' })
    ),
    economy: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
      React.createElement('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
    ),
    data: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
      React.createElement('path', { d: 'M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5' }),
      React.createElement('path', { d: 'M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3' })
    ),
    transparency: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    ),
  };
  return React.createElement('div', { className: 'service-card animate-fade-in-up', style: { animationDelay: props.delay + 'ms' }, onClick: function() { props.onNavigate(service.path); } },
    React.createElement('div', { className: 'service-icon' }, icons[service.icon]),
    React.createElement('h3', null, service.title),
    React.createElement('p', null, service.description),
    React.createElement('span', { className: 'service-link' },
      'Saiba mais',
      React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
        React.createElement('polyline', { points: '12 5 19 12 12 19' })
      )
    )
  );
}

function HighlightCard(props) {
  var item = props.item;
  return React.createElement('div', { className: 'highlight-card animate-fade-in-up', style: { animationDelay: props.delay + 'ms' } },
    React.createElement('div', { className: 'highlight-image', style: { background: item.color } },
      React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '48', height: '48', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' }),
        React.createElement('circle', { cx: '12', cy: '13', r: '3' })
      )
    ),
    React.createElement('div', { className: 'highlight-body' },
      React.createElement('span', { className: 'highlight-tag' }, item.tag),
      React.createElement('h3', null, item.title),
      React.createElement('p', null, item.description),
      React.createElement('div', { className: 'highlight-meta' },
        React.createElement('span', null, item.date)
      )
    )
  );
}

export var App = function() {
  var activePageState = useState('home');
  var activePage = activePageState[0];
  var setActivePage = activePageState[1];
  var navigateTo = function(page) { setActivePage(page); window.scrollTo(0, 0); };

  var renderPage = function() {
    switch(activePage) {
      case 'saude': return React.createElement(HealthPage, null);
      case 'educacao': return React.createElement(EducationPage, null);
      case 'turismo': return React.createElement(TourismPage, null);
      case 'economia': return React.createElement(EconomyPage, null);
      default:
        return React.createElement('main', { id: 'main-content', role: 'main' },
          /* HERO */
          React.createElement('section', { className: 'hero', 'aria-label': 'Banner principal' },
            React.createElement('div', { className: 'hero-shapes' },
              React.createElement('div', { className: 'hero-shape hero-shape-1 animate-float', style: { animationDelay: '0.5s' } }),
              React.createElement('div', { className: 'hero-shape hero-shape-2 animate-float', style: { animationDelay: '1.2s' } }),
              React.createElement('div', { className: 'hero-shape hero-shape-3 animate-float', style: { animationDelay: '2s' } })
            ),
            React.createElement('div', { className: 'container' },
              React.createElement('div', { className: 'hero-content' },
                React.createElement('div', { className: 'hero-badge' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                    React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
                    React.createElement('path', { d: 'm9 12 2 2 4-4' })
                  ),
                  'Portal Oficial de Dados Publicos'
                ),
                React.createElement('h1', { className: 'hero-title' }, 'Observatorio de ', React.createElement('span', null, 'Aracaju')),
                React.createElement('p', { className: 'hero-subtitle' }, 'Dados publicos para transparencia e desenvolvimento. Acompanhe indicadores de Saude, Educacao, Turismo e Economia da capital sergipana.'),
                React.createElement('div', { className: 'hero-actions' },
                  React.createElement('button', { className: 'btn btn-cta btn-lg', onClick: function() { navigateTo('economia'); } },
                    React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                      React.createElement('polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17' }),
                      React.createElement('polyline', { points: '16 7 22 7 22 13' })
                    ),
                    'Ver Dados Economicos'
                  ),
                  React.createElement('button', { className: 'btn btn-outline btn-lg', onClick: function() { navigateTo('saude'); } }, 'Dados de Saude')
                )
              )
            )
          ),
          React.createElement('hr', { className: 'section-divider' }),
          /* KPIs */
          React.createElement('section', { className: 'section section-gradient', 'aria-label': 'Indicadores' },
            React.createElement('div', { className: 'container' },
              React.createElement('div', { className: 'section-header' },
                React.createElement('span', { className: 'section-badge' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                    React.createElement('polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17' })
                  ),
                  'Numeros que Importam'
                ),
                React.createElement('h2', null, 'Indicadores Principais'),
                React.createElement('p', null, 'Dados em tempo real sobre os principais indicadores de desenvolvimento de Aracaju.')
              ),
              React.createElement('div', { className: 'kpi-grid' },
                kpis.map(function(kpi, idx) { return React.createElement(KpiCard, { key: idx, kpi: kpi, delay: idx * 100 }); })
              )
            )
          ),
          React.createElement('hr', { className: 'section-divider' }),
          /* SERVICES */
          React.createElement('section', { className: 'section section-white', 'aria-label': 'Servicos' },
            React.createElement('div', { className: 'container' },
              React.createElement('div', { className: 'section-header' },
                React.createElement('span', { className: 'section-badge' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                    React.createElement('rect', { x: '3', y: '3', width: '7', height: '7' }),
                    React.createElement('rect', { x: '14', y: '3', width: '7', height: '7' }),
                    React.createElement('rect', { x: '14', y: '14', width: '7', height: '7' }),
                    React.createElement('rect', { x: '3', y: '14', width: '7', height: '7' })
                  ),
                  'Acesse os Setores'
                ),
                React.createElement('h2', null, 'Servicos Principais'),
                React.createElement('p', null, 'Explore dados e indicadores de cada setor da administracao municipal.')
              ),
              React.createElement('div', { className: 'services-grid' },
                services.map(function(s, idx) { return React.createElement(ServiceCard, { key: idx, service: s, delay: idx * 80, onNavigate: navigateTo }); })
              )
            )
          ),
          React.createElement('hr', { className: 'section-divider' }),
          /* HIGHLIGHTS */
          React.createElement('section', { className: 'section section-gradient', 'aria-label': 'Destaques' },
            React.createElement('div', { className: 'container' },
              React.createElement('div', { className: 'section-header' },
                React.createElement('span', { className: 'section-badge' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                    React.createElement('path', { d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' }),
                    React.createElement('circle', { cx: '12', cy: '13', r: '3' })
                  ),
                  'Ultimas Noticias'
                ),
                React.createElement('h2', null, 'Destaques e Transparencia'),
                React.createElement('p', null, 'Fique por dentro das principais noticias e dados publicos de Aracaju.')
              ),
              React.createElement('div', { className: 'highlights-grid' },
                news.map(function(item, idx) { return React.createElement(HighlightCard, { key: idx, item: item, delay: idx * 100 }); })
              )
            )
          ),
          /* TRANSPARENCY */
          React.createElement('section', { className: 'section section-white', 'aria-label': 'Transparencia' },
            React.createElement('div', { className: 'container' },
              React.createElement('div', { className: 'transparency-banner' },
                React.createElement('div', null,
                  React.createElement('h3', null, 'Compromisso com a Transparencia'),
                  React.createElement('p', null, 'Todos os dados sao atualizados periodicamente e seguem o padrao da Lei de Acesso a Informacao (LAI).')
                ),
                React.createElement('button', { className: 'btn btn-primary' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
                    React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
                    React.createElement('polyline', { points: '7 10 12 15 17 10' }),
                    React.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '3' })
                  ),
                  'Acessar Dados Abertos'
                )
              )
            )
          ),
          /* CTAs */
          React.createElement('section', { className: 'section section-gradient', 'aria-label': 'Chamadas para acao' },
            React.createElement('div', { className: 'container' },
              React.createElement('div', { className: 'cta-grid' },
                React.createElement('div', { className: 'cta-block primary' },
                  React.createElement('div', { className: 'cta-decoration' }),
                  React.createElement('div', { className: 'cta-decoration-2' }),
                  React.createElement('h3', null, 'Uma Nova Cidade'),
                  React.createElement('p', null, 'O Observatorio de Aracaju e uma ferramenta de inteligencia que consolida dados e indicadores estrategicos sobre a cidade.'),
                  React.createElement('button', { className: 'btn btn-white btn-lg', onClick: function() { navigateTo('economia'); } }, 'Ver Relatorios Completos')
                ),
                React.createElement('div', { className: 'cta-block mint' },
                  React.createElement('div', { className: 'cta-decoration' }),
                  React.createElement('div', { className: 'cta-decoration-2' }),
                  React.createElement('h3', null, 'Acompanhe o Desenvolvimento'),
                  React.createElement('p', null, 'Dados atualizados, analises estrategicas e insights para investidores, empreendedores e gestores publicos.'),
                  React.createElement('button', { className: 'btn btn-primary btn-lg', onClick: function() { navigateTo('educacao'); } }, 'Explorar Dados')
                )
              )
            )
          )
        );
    }
  };

  return React.createElement('div', { className: 'min-h-screen', style: { display: 'flex', flexDirection: 'column' } },
    React.createElement('a', { href: '#main-content', className: 'skip-link' }, 'Pular para o conteudo principal'),
    React.createElement(Header, { onNavigate: navigateTo }),
    React.createElement('div', { style: { flex: 1 } }, renderPage()),
    React.createElement(Footer, { onNavigate: navigateTo })
  );
};
