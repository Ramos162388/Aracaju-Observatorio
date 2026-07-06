import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-16 py-12 bg-primary text-primary-foreground shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Column - Logo and Description */}
          <div>
            <a href="/">
              <img src="/logo-observatorio.png" alt="Observatório Aracaju" className="h-12 w-auto mb-4" />
            </a>
            <p className="text-sm opacity-90 mb-4">
              Reunindo, analisando e compartilhando indicadores econômicos para apoiar políticas públicas e o desenvolvimento de Aracaju.
            </p>
          </div>

          {/* Second Column - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <span className="text-primary mr-2">📍 Prefeitura de Aracaju</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary mr-2">📧 ytalo.ramos@aracaju.se.gov.br</span>
              </div>
            </div>
          </div>

          {/* Third Column - Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <a href="?" className="hover:text-primary-foreground">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
        <p>&copy; 2025 Prefeitura Municipal de Aracaju. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};