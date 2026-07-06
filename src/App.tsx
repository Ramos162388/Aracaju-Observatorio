import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const sectors = [
  {
    title: 'Setor de Saúde',
    description: 'Dados sobre estabelecimentos de saúde, unidades de atenção básica, vacinação e indicadores epidemiológicos.',
    link: '/saude',
    color: 'primary',
  },
  {
    title: 'Setor de Educação',
    description: 'Escolas municipais, matrículas, desempenho acadêmico e infraestrutura educacional.',
    link: '/educacao',
    color: 'secondary',
  },
  {
    title: 'Setor de Turismo',
    description: 'Atrativos turísticos, visitantes, ocupação hoteleira e impacto econômico do turismo.',
    link: '/turismo',
    color: 'accent',
  },
  {
    title: 'Setor Econômico',
    description: 'PIB, empregos, microcréditos e indicadores de desenvolvimento econômico.',
    link: '/economia',
    color: 'primary',
  },
];

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
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
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Explore os Setores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <a key={sector.title} href={sector.link} className="block">
                <div className="p-6 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all animate-slide-up bg-card" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {sector.title.includes('Saúde') && <span className="text-3xl">🏥</span>}
                    {sector.title.includes('Educação') && <span className="text-3xl">📚</span>}
                    {sector.title.includes('Turismo') && <span className="text-3xl">🏖️</span>}
                    {sector.title.includes('Econômico') && <span className="text-3xl">📈</span>}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{sector.title}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};