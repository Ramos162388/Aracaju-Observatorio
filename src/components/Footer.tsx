import React from 'react';

export var Footer = function(props) {
  var onNavigate = props.onNavigate;
  var handleNav = function(path) { if (onNavigate) onNavigate(path); };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-icon" aria-hidden="true">OA</div>
            <h3>Observatório de Aracaju</h3>
            <p>Portal de transparência e dados públicos da Prefeitura Municipal de Aracaju. Acompanhe os indicadores de Saúde, Educação, Turismo e Economia da cidade.</p>
          </div>
          <div>
            <h4>Setores</h4>
            <ul className="footer-links">
              <li><a href="#saude" onClick={function(e) { e.preventDefault(); handleNav('saude'); }}>Saúde</a></li>
              <li><a href="#educacao" onClick={function(e) { e.preventDefault(); handleNav('educacao'); }}>Educação</a></li>
              <li><a href="#turismo" onClick={function(e) { e.preventDefault(); handleNav('turismo'); }}>Turismo</a></li>
              <li><a href="#economia" onClick={function(e) { e.preventDefault(); handleNav('economia'); }}>Economia</a></li>
              <li><a href="#esgap" onClick={function(e) { e.preventDefault(); handleNav('esgap'); }}>ESGAP</a></li>
              <li><a href="#fundat" onClick={function(e) { e.preventDefault(); handleNav('fundat'); }}>FUNDAT</a></li>
            </ul>
          </div>
          <div>
            <h4>Institucional</h4>
            <ul className="footer-links">
              <li><a href="#">Sobre o Observatório</a></li>
              <li><a href="#">Dados Abertos</a></li>
              <li><a href="#">Acesso à Informação</a></li>
              <li><a href="#">Ouvidoria</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <div className="footer-contact-item">
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>Prefeitura Municipal de Aracaju - SE</span>
            </div>
            <div className="footer-contact-item">
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span>gabinete@aracaju.se.gov.br</span>
            </div>
            <div className="footer-contact-item">
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              </span>
              <span>(79) 3142-1721</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Prefeitura Municipal de Aracaju. Todos os direitos reservados.</p>
          <div className="footer-badges">
            <div className="footer-badge">
              <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              Acessibilidade WCAG 2.1
            </div>
            <div className="footer-badge">
              <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></span>
              Lei de Acesso à Informação
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
