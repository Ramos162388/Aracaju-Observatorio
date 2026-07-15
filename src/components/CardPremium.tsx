import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

var colorClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
};

export var CardPremium = function(props) {
  var title = props.title;
  var description = props.description;
  var icon = props.icon;
  var color = props.color || 'primary';
  var growth = props.growth;
  var link = props.link;

  return (
    <div className="p-6 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all animate-slide-up bg-card">
      <div className="flex items-center justify-between mb-4">
        {icon && <div className={'w-12 h-12 rounded-lg flex items-center justify-center ' + colorClasses[color]}>{icon}</div>}
        {growth && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-accent text-accent-foreground">
            {growth}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {link && (
        <a href={link} className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
          Saiba mais
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </a>
      )}
    </div>
  );
};