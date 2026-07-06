import React from 'react';

export const HealthPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-geometric-gradient overflow-hidden">
        <div className="absolute inset-0 bg-overlay-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Setor de Saúde</h1>
            <p className="text-xl opacity-95">Indicadores de saúde pública e gestão hospitalar em Aracaju</p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: '15', label: 'Unidades de Saúde', sublabel: 'UAPS e postos' },
            { value: '89%', label: 'Vacinação', sublabel: 'Cobertura básica' },
            { value: '3,4k', label: 'Atendimentos/mês', sublabel: 'Urgência e emergência' },
            { value: '12', label: 'Hospitais', sublabel: 'Públicos e privados' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 text-center shadow-elegant bg-card animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1 text-card-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Principais Indicadores</h2>
        <div className="space-y-6">
          {[
            { name: 'Atendimentos UBS', rate: '92%', change: '+5% vs 2024' },
            { name: 'Vacinação Infantil', rate: '89%', change: '+8% vs 2024' },
          ].map((item) => (
            <div key={item.name} className="p-6 rounded-lg shadow-soft bg-muted">
              <div className="flex justify-between items-center mb-4">
                <span className="text-card-foreground font-semibold">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.change}</span>
              </div>
              <div className="w-full bg-border rounded-full h-3">
                <div className="bg-primary h-3 rounded-full transition-all" style={{ width: item.rate }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};