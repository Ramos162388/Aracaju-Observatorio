import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HealthPage } from './pages/HealthPage';
import { EducationPage } from './pages/EducationPage';
import { TourismPage } from './pages/TourismPage';
import { EconomyPage } from './pages/EconomyPage';

var sectors = [
  { title: 'Saúde', description: 'Dados sobre estabelecimentos de saúde, unidades de atenção básica, vacinação e indicadores epidemiológicos.', link: '#saude', emoji: '🏥' },
  { title: 'Educação', description: 'Escolas municipais, matrículas, desempenho acadêmico e infraestrutura educacional.', link: '#educacao', emoji: '📚' },
  { title: 'Turismo', description: 'Atrativos turísticos, visitantes, ocupação hoteleira e impacto econômico do turismo.', link: '#turismo', emoji: '🏖️' },
  { title: 'Economia', description: 'PIB, empregos, microcréditos e indicadores de desenvolvimento econômico.', link: '#economia', emoji: '📈' },
];

var stats = [
  { value: '35,5%', label: 'PIB de Sergipe em Aracaju' },
  { value: '+38,5%', label: 'Crescimento em Tecnologia' },
  { value: '898', label: 'Novas Empresas em 2025' },
  { value: '97,4%', label: 'Microempresas (MEI)' },
];

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
      case 'saude':
        return <HealthPage />;
      case 'educacao':
        return <EducationPage />;
      case 'turismo':
        return <TourismPage />;
      case 'economia':
        return <EconomyPage />;
      default:
        return (
          <div>
            {/* Hero Section */}
            <section className="relative py-24 bg-geometric-gradient overflow-hidden">
              <div className="absolute inset-0 bg-overlay-pattern" />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Observatório de Aracaju</h1>
                  <p className="text-2xl mb-4 opacity-95">Dados Públicos para Transparência e Desenvolvimento</p>
                  <p className="text-xl mb-8 opacity-90">
                    Portal centralizado para acesso a informações de Saúde, Educação, Turismo e Economia.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={function() { navigateTo('economia'); }} className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all">
                      Ver Dados Econômicos
                    </button>
                    <button onClick={function() { navigateTo('saude'); }} className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                      Dados de Saúde
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map(function(stat, idx) {
                    return (
                      <div key={idx} className="p-6 text-center hover:shadow-elegant transition-all animate-slide-up bg-card" style={{ animationDelay: (idx * 100) + 'ms' }}>
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-16 container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Explore os Setores</h2>
                <p className="text-xl text-muted-foreground">Navegue pelas diferentes áreas para conhecer os dados de Aracaju</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {sectors.map(function(sector, idx) {
                  return (
                    <div key={sector.title} onClick={function() { navigateTo(sector.title.toLowerCase()); }} className="p-8 h-full hover:shadow-elegant transition-all cursor-pointer group animate-scale-in bg-card" style={{ animationDelay: (idx * 100) + 'ms' }}>
                      <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">{sector.emoji}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">{sector.title}</h3>
                      <p className="text-muted-foreground mb-4">{sector.description}</p>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Saiba mais →
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-primary text-primary-foreground">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Uma Nova Cidade</h2>
                  <p className="text-xl opacity-95 leading-relaxed">
                    O Observatório de Aracaju é uma ferramenta de inteligência que consolida dados e indicadores estratégicos sobre a cidade. 
                    Fortalecemos o ambiente de negócios, apoiamos decisões de empreendedores e investidores, e contribuímos para o planejamento 
                    de políticas públicas voltadas ao desenvolvimento sustentável e competitivo do município.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 container mx-auto px-4">
              <div className="p-12 text-center shadow-elegant bg-gradient-to-br from-muted to-background">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Acompanhe o desenvolvimento de Aracaju</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Dados atualizados, análises estratégicas e insights para investidores, empreendedores e gestores públicos
                </p>
                <button onClick={function() { navigateTo('economia'); }} className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                  Acessar Relatórios Completos
                </button>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div onClick={function() { navigateTo('home'); }} className="cursor-pointer">
        <Header />
      </div>
      <main className="flex-grow">
        {renderPage()}
      </main>
      <div onClick={function() { navigateTo('home'); }} className="cursor-pointer">
        <Footer />
      </div>
    </div>
  );
};