import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HealthPage } from './pages/HealthPage';
import { EducationPage } from './pages/EducationPage';
import { TourismPage } from './pages/TourismPage';
import { EconomyPage } from './pages/EconomyPage';

/* === Animated Counter Component === */
function useCounter(end, duration) {
  var ref = useRef(0);
  var frameRef = useRef(0);
  var [value, setValue] = useState(0);

  useEffect(function() {
    var startTime = null;
    var animate = function(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return function() { cancelAnimationFrame(frameRef.current); };
  }, [end, duration]);

  return value;
}

/* === KPI Data === */
var kpis = [
  { value: 355, suffix: '%', label: 'PIB de Sergipe em Aracaju', change: '+2.3%', up: true, icon: 'chart', colorClass: 'primary' },
  { value: 898, suffix: '', label: 'Novas Empresas em 2025', change: '+18%', up: true, icon: 'building', colorClass: 'secondary' },
  { value: 42, suffix: 'k', label: 'Alunos Matriculados', change: '+5%', up: true, icon: 'users', colorClass: 'mint' },
  { value: 152, suffix: 'k', label: 'Visitantes Mensais', change: '+32%', up: true, icon: 'globe', colorClass: 'gold' },
];

/* === Services Data === */
var services = [
  { title: 'Saude Publica', description: 'Dados sobre unidades de saude, vacinacao, atendimentos e indicadores epidemiologicos de Aracaju.', icon: 'health', path: 'saude' },
  { title: 'Educacao', description: 'Escolas municipais, matriculas, desempenho academico e infraestrutura educacional.', icon: 'education', path: 'educacao' },
  { title: 'Turismo', description: 'Atrativos turisticos, visitantes, ocupacao hoteleira e impacto economico do turismo.', icon: 'tourism', path: 'turismo' },
  { title: 'Economia', description: 'PIB, empregos, microcreditos e indicadores de desenvolvimento economico local.', icon: 'economy', path: 'economia' },
  { title: 'Dados Abertos', description: 'Acesse conjuntos de dados publicos para pesquisas, estudos e desenvolvimento de solucoes.', icon: 'data', path: 'home' },
  { title: 'Transparencia', description: 'Acompanhe gastos publicos, licitacoes, contratos e prestacao de contas municipais.', icon: 'transparency', path: 'home' },
];

/* === News Data === */
var news = [
  { title: 'Crescimento de 38,5% no Setor de Tecnologia', description: 'Aracaju lidera crescimento de empresas de tecnologia em Sergipe com 54 novas startups.', tag: 'Economia', date: '10 Jul 2025', color: 'primary' },
  { title: 'Cobertura Vacinal atinge 89% na Capital', description: 'Meta de vacinacao infantil superada com campanha de vacinacao municipal.', tag: 'Saude', date: '08 Jul 2025', color: 'mint' },
  { title: 'Novo Parque Ecologico e Inaugurado', description: 'Parque das Emas ganha nova area de lazer com investimento de R$ 2.5 milhoes.', tag: 'Turismo', date: '05 Jul 2025', color: 'gold' },
];

/* === KPI Card Component === */
function KpiCard(props) {
  var kpi = props.kpi;
  var animatedValue = useCounter(kpi.value, 2000);
  var prefix = kpi.value === 355 ? '' : '';

  return (
    <div className="kpi-card animate-fade-in-up" style={{ animationDelay: props.delay + 'ms' }}>
      <div className={'kpi-icon ' + kpi.colorClass}>
        {kpi.icon === 'chart' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
        {kpi.icon === 'building' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>}
        {kpi.icon === 'users' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
        {kpi.icon === 'globe' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
      </div>
      <div className="kpi-value">{prefix}{animatedValue}{kpi.suffix}</div>
      <div className="kpi-label">{kpi.label}</div>
      <span className={'kpi-change ' + (kpi.up ? 'up' : 'down')}>
        {kpi.up ? '\u2191' : '\u2193'} {kpi.change}
      </span>
    </div>
  );
}

/* === Service Card Component === */
function ServiceCard(props) {
  var service = props.service;
  return (
    <div className="service-card animate-fade-in-up" style={{ animationDelay: props.delay + 'ms' }} onClick={function() { props.onNavigate(service.path); }}>
      <div className="service-icon">
        {service.icon === 'health' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>}
        {service.icon === 'education' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
        {service.icon === 'tourism' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>}
        {service.icon === 'economy' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
        {service.icon === 'data' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>}
        {service.icon === 'transparency' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-link">
        Saiba mais
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </span>
    </div>
  );
}

/* === Highlight Card Component === */
function HighlightCard(props) {
  var item = props.item;
  var bgMap = {
    primary: 'linear-gradient(135deg, #006966, #008580)',
    mint: 'linear-gradient(135deg, #7FDBC8, #A8E6CF)',
    gold: 'linear-gradient(135deg, #FFD166, #FFC233)',
  };
  return (
    <div className="highlight-card animate-fade-in-up" style={{ animationDelay: props.delay + 'ms' }}>
      <div className="highlight-image" style={{ background: bgMap[item.color] || bgMap.primary }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
      </div>
      <div className="highlight-body">
        <span className="highlight-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="highlight-meta">
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}

/* === Main App === */
export var App = function() {
  var activePageState = useState('home');
  var activePage = activePageState[0];
  var setActivePage = activePageState[1];

  var navigateTo = function(page) {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  var renderPage = function() {
    switch(activePage) {
      case 'saude': return <HealthPage />;
      case 'educacao': return <EducationPage />;
      case 'turismo': return <TourismPage />;
      case 'economia': return <EconomyPage />;
      default:
        return (
          <main id="main-content" role="main">
            {/* === HERO SECTION === */}
            <section className="hero" aria-label="Banner principal">
              <div className="container">
                <div className="hero-content">
                  <div className="hero-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    Portal Oficial de Dados Publicos
                  </div>
                  <h1 className="hero-title">
                    Observatorio de <span>Aracaju</span>
                  </h1>
                  <p className="hero-subtitle">
                    Dados publicos para transparencia e desenvolvimento. Acompanhe indicadores de Saude, Educacao, Turismo e Economia da capital sergipana.
                  </p>
                  <div className="hero-actions">
                    <button className="btn btn-white btn-lg" onClick={function() { navigateTo('economia'); }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      Ver Dados Economicos
                    </button>
                    <button className="btn btn-outline btn-lg" onClick={function() { navigateTo('saude'); }}>
                      Dados de Saude
                    </button>
                  </div>
                </div>
              </div>
              <div className="hero-visual" aria-hidden="true">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="80" width="300" height="240" rx="16" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
                  <rect x="80" y="120" width="120" height="80" rx="8" fill="rgba(255,255,255,0.1)"/>
                  <rect x="220" y="120" width="100" height="36" rx="6" fill="rgba(255,209,102,0.3)"/>
                  <rect x="220" y="170" width="100" height="30" rx="6" fill="rgba(127,219,200,0.3)"/>
                  <rect x="80" y="230" width="240" height="12" rx="4" fill="rgba(255,255,255,0.1)"/>
                  <rect x="80" y="256" width="180" height="12" rx="4" fill="rgba(255,255,255,0.08)"/>
                  <rect x="80" y="282" width="200" height="12" rx="4" fill="rgba(255,255,255,0.06)"/>
                </svg>
              </div>
            </section>

            {/* === KPI SECTION === */}
            <section className="section section-white" aria-label="Indicadores principais">
              <div className="container">
                <div className="section-header">
                  <span className="section-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                    Numeros que Importam
                  </span>
                  <h2>Indicadores Principais</h2>
                  <p>Dados em tempo real sobre os principais indicadores de desenvolvimento de Aracaju.</p>
                </div>
                <div className="kpi-grid">
                  {kpis.map(function(kpi, idx) {
                    return <KpiCard key={idx} kpi={kpi} delay={idx * 100} />;
                  })}
                </div>
              </div>
            </section>

            {/* === SERVICES SECTION === */}
            <section className="section section-gray" aria-label="Servicos publicos">
              <div className="container">
                <div className="section-header">
                  <span className="section-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    Acesse os Setores
                  </span>
                  <h2>Servicos Principais</h2>
                  <p>Explore dados e indicadores de cada setor da administracao municipal.</p>
                </div>
                <div className="services-grid">
                  {services.map(function(service, idx) {
                    return <ServiceCard key={idx} service={service} delay={idx * 80} onNavigate={navigateTo} />;
                  })}
                </div>
              </div>
            </section>

            {/* === HIGHLIGHTS SECTION === */}
            <section className="section section-white" aria-label="Destaques e noticias">
              <div className="container">
                <div className="section-header">
                  <span className="section-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                    Ultimas Noticias
                  </span>
                  <h2>Destaques e Transparencia</h2>
                  <p>Fique por dentro das principais noticias e dados publicos de Aracaju.</p>
                </div>
                <div className="highlights-grid">
                  {news.map(function(item, idx) {
                    return <HighlightCard key={idx} item={item} delay={idx * 100} />;
                  })}
                </div>
              </div>
            </section>

            {/* === TRANSPARENCY BANNER === */}
            <section className="section section-gray" aria-label="Transparencia">
              <div className="container">
                <div className="transparency-banner">
                  <div>
                    <h3>Compromisso com a Transparencia</h3>
                    <p>Todos os dados sao atualizados periodicamente e seguem o padrao da Lei de Acesso a Informacao (LAI).</p>
                  </div>
                  <button className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Acessar Dados Abertos
                  </button>
                </div>
              </div>
            </section>

            {/* === CTA SECTION === */}
            <section className="section" aria-label="Chamadas para acao">
              <div className="container">
                <div className="cta-grid">
                  <div className="cta-block primary">
                    <h3>Uma Nova Cidade</h3>
                    <p>O Observatorio de Aracaju e uma ferramenta de inteligencia que consolida dados e indicadores estrategicos sobre a cidade.</p>
                    <button className="btn btn-white btn-lg" onClick={function() { navigateTo('economia'); }}>
                      Ver Relatorios Completos
                    </button>
                  </div>
                  <div className="cta-block mint">
                    <h3>Acompanhe o Desenvolvimento</h3>
                    <p>Dados atualizados, analises estrategicas e insights para investidores, empreendedores e gestores publicos.</p>
                    <button className="btn btn-primary btn-lg" onClick={function() { navigateTo('educacao'); }}>
                      Explorar Dados
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column' }}>
      <a href="#main-content" className="skip-link">Pular para o conteudo principal</a>
      <Header onNavigate={navigateTo} />
      <div style={{ flex: 1 }}>
        {renderPage()}
      </div>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};
