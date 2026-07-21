import React, { useState, useEffect } from 'react';

var departments = [
  { path: 'saude', label: 'Saude' },
  { path: 'educacao', label: 'Educacao' },
  { path: 'turismo', label: 'Turismo' },
  { path: 'economia', label: 'Economia' },
  { path: 'esgap', label: 'ESGAP' },
  { path: 'fundat', label: 'FUNDAT' },

];

export var Header = function(props) {
  var onNavigate = props.onNavigate;
  var mobileMenuOpenState = useState(false);
  var mobileMenuOpen = mobileMenuOpenState[0];
  var setMobileMenuOpen = mobileMenuOpenState[1];
  var scrolledState = useState(false);
  var scrolled = scrolledState[0];
  var setScrolled = scrolledState[1];
  var selectedState = useState('');
  var selected = selectedState[0];
  var setSelected = selectedState[1];

  useEffect(function() {
    var handleScroll = function() { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return function() { window.removeEventListener('scroll', handleScroll); };
  }, []);

  var handleNav = function(path) {
    if (onNavigate) onNavigate(path);
    setMobileMenuOpen(false);
    setSelected('');
  };

  var handleSelect = function(e) {
    var path = e.target.value;
    if (path) { setSelected(path); handleNav(path); }
  };

  return (
    <header className={'header' + (scrolled ? ' scrolled' : '')} role="banner">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="logo" onClick={function(e) { e.preventDefault(); handleNav('home'); }} aria-label="Observatorio de Aracaju">
            <div className="logo-icon" aria-hidden="true">OA</div>
            <div className="logo-text">
              <span className="logo-title">Observatorio</span>
              <span className="logo-subtitle">Prefeitura de Aracaju</span>
            </div>
          </a>
          <nav className="nav-desktop" role="navigation" aria-label="Menu principal">
            <a href="#home" className="nav-link" onClick={function(e) { e.preventDefault(); handleNav('home'); }}>Inicio</a>
            <div className="nav-select-wrapper">
              <select className="nav-select" value={selected} onChange={handleSelect} aria-label="Selecionar secretaria">
                <option value="">Órgãos</option>
                {departments.map(function(d) {
                  return React.createElement('option', { key: d.path, value: d.path }, d.label);
                })}
              </select>
              <svg className="nav-select-chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </nav>
          <button className="btn-header-cta" onClick={function() { handleNav('economia'); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Acesso ao Cidadao
          </button>
          <button className="btn-mobile-menu" onClick={function() { setMobileMenuOpen(!mobileMenuOpen); }} aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="nav-mobile open" role="navigation" aria-label="Menu mobile">
            <a href="#home" className="nav-mobile-link" onClick={function(e) { e.preventDefault(); handleNav('home'); }}>Inicio</a>
            <div className="nav-mobile-divider"></div>
            <span className="nav-mobile-label">Órgãos</span>
            {departments.map(function(d) {
              return (
                <a key={d.path} href={'#' + d.path} className="nav-mobile-link" onClick={function(e) { e.preventDefault(); handleNav(d.path); }}>
                  {d.label}
                </a>
              );
            })}
            <button className="nav-mobile-cta" onClick={function() { handleNav('economia'); }}>Acesso ao Cidadao</button>
          </nav>
        )}
      </div>
    </header>
  );
};
