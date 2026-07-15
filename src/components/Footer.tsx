import React from 'react';

export var Footer = function() {
  return (
    <footer className="mt-16 py-12 bg-primary text-primary-foreground shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">OA</span>
              </div>
              <h3 className="text-lg font-bold">Observatório de Aracaju</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Reunindo, analisando e compartilhando indicadores públicos para apoiar políticas públicas e o desenvolvimento de Aracaju.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <span>Prefeitura Municipal de Aracaju</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>ytalo.ramos@aracaju.se.gov.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>(79) 3142-1721</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Secretaria</h3>
            <p className="text-sm opacity-90">Secretaria Municipal do Desenvolvimento Econômico e Inovação - SEMDE</p>
            <p className="text-xs opacity-75 mt-4">Aracaju - Uma Nova Cidade</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
        <p>&copy; 2025 Prefeitura Municipal de Aracaju. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};