import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

var navigation = [
  { path: '/', label: 'Início' },
  { path: '/saude', label: 'Saúde' },
  { path: '/educacao', label: 'Educação' },
  { path: '/turismo', label: 'Turismo' },
  { path: '/economia', label: 'Economia' },
  { path: '/dados', label: 'Dados Completos' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/contato', label: 'Contato' },
];

export var Header = function() {
  var mobileMenuOpenState = useState(false);
  var mobileMenuOpen = mobileMenuOpenState[0];
  var setMobileMenuOpen = mobileMenuOpenState[1];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
            <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Observatório</h1>
              <p className="text-xs text-muted-foreground">Prefeitura de Aracaju</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map(function(item) {
              return (
                <a key={item.path} href={item.path} className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 transition-all">
                  {item.label}
                </a>
              );
            })}
          </nav>
          <button
            onClick={function() { setMobileMenuOpen(!mobileMenuOpen); }}
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-all"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 animate-fade-in bg-background border-t border-border">
          <div className="flex flex-col space-y-2 px-4">
            {navigation.map(function(item) {
              return (
                <a key={item.path} href={item.path} onClick={function() { setMobileMenuOpen(false); }} className="py-2 px-4 rounded-md text-foreground hover:bg-primary/10 transition-all">
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};