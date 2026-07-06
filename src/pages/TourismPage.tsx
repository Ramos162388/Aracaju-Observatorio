import React from 'react';

export var TourismPage = function() {
  var stats = [
    { value: '28', label: 'Atrativos', sublabel: 'Turísticos cadastrados' },
    { value: '152k', label: 'Visitantes', sublabel: 'Mês de julho/2025' },
    { value: '78%', label: 'Ocupação', sublabel: 'Hotéis municipais' },
    { value: 'R$ 45M', label: 'Receita', sublabel: 'Turismo em 2025' },
  ];

  var attractions = [
    { name: 'Praia de Aracaju', type: 'Litoral', visitors: '50.000/mês' },
    { name: 'Parque das Emas', type: 'Ecológico', visitors: '12.000/mês' },
    { name: 'Catedral Metropolitana', type: 'Religioso', visitors: '8.500/mês' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-geometric-gradient overflow-hidden">
        <div className="absolute inset-0 bg-overlay-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Setor de Turismo</h1>
            <p className="text-xl opacity-95">Atrativos, visitantes e desenvolvimento turístico em Aracaju</p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(function(stat, idx) {
            return (
              <div key={idx} className="p-6 text-center shadow-elegant bg-card animate-scale-in" style={{ animationDelay: (idx * 100) + 'ms' }}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1 text-card-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Principais Atrativos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map(function(attraction) {
            return (
              <div key={attraction.name} className="p-6 rounded-lg shadow-soft bg-muted">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{attraction.name}</h3>
                <p className="text-muted-foreground mb-3">{attraction.type}</p>
                <span className="text-sm text-primary font-semibold">{attraction.visitors}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};