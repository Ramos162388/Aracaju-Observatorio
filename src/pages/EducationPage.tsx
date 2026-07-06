import React from 'react';

export var EducationPage = function() {
  var stats = [
    { value: '87', label: 'Escolas Municipais', sublabel: 'Ensino fundamental' },
    { value: '42k', label: 'Matrículas', sublabel: 'Alunos ativos' },
    { value: '94%', label: 'Frequência', sublabel: 'Média mensal' },
    { value: '3,2k', label: 'Professores', sublabel: 'Efetivos e contratados' },
  ];

  var indicators = [
    { name: 'IDEB Iniciais', value: '5,8', change: '+0,3 vs 2023', width: '58%' },
    { name: 'IDEB Finais', value: '4,9', change: '+0,2 vs 2023', width: '49%' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-geometric-gradient overflow-hidden">
        <div className="absolute inset-0 bg-overlay-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Setor de Educação</h1>
            <p className="text-xl opacity-95">Dados educacionais e infraestrutura escolar em Aracaju</p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(function(stat, idx) {
            return (
              <div key={idx} className="p-6 text-center shadow-elegant bg-card animate-scale-in" style={{ animationDelay: (idx * 100) + 'ms' }}>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1 text-card-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Principais Indicadores</h2>
        <div className="space-y-6">
          {indicators.map(function(item) {
            return (
              <div key={item.name} className="p-6 rounded-lg shadow-soft bg-muted">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-card-foreground font-semibold">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.change}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-border rounded-full h-3">
                    <div className="bg-secondary h-3 rounded-full transition-all" style={{ width: item.width }} />
                  </div>
                  <span className="text-2xl font-bold text-secondary">{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};