import React from 'react';

export const EconomyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-geometric-gradient overflow-hidden">
        <div className="absolute inset-0 bg-overlay-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Setor Econômico</h1>
            <p className="text-xl opacity-95">PIB, empreendedorismo e indicadores de desenvolvimento econômico</p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: '35,5%', label: 'PIB Sergipe', sublabel: 'Concentrado em Aracaju' },
            { value: '898', label: 'Novas Empresas', sublabel: 'Setores monitorados 2025' },
            { value: '97,4%', label: 'Microempresas', sublabel: 'Força do empreendedorismo local' },
            { value: 'R$ 300Mi', label: 'Microcrédito', sublabel: 'Crediamigo em Sergipe' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 text-center shadow-elegant bg-card animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1 text-card-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Crescimento Empresarial</h2>
        <div className="space-y-6">
          {[
            { sector: 'Tecnologia', growth: '+38,5%', details: '54 novas empresas TI' },
            { sector: 'Pet Market', growth: '+11%', details: '70 novas empresas pet' },
            { sector: 'Beleza', growth: '+16%', details: '774 novas empresas beleza' },
          ].map((item) => (
            <div key={item.sector} className="p-6 rounded-lg shadow-soft bg-muted">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <span className="text-xl font-bold text-card-foreground">{item.sector}</span>
                  <span className="text-sm text-muted-foreground block">{item.details}</span>
                </div>
                <span className="text-2xl font-bold text-primary">{item.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};