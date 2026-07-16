import React from 'react';

export var CardPremium = function(props) {
  var title = props.title;
  var description = props.description;
  var icon = props.icon;
  var color = props.color || 'primary';
  var growth = props.growth;
  var link = props.link;

  var iconBg = color === 'primary' ? { background: 'rgba(0,105,102,0.1)', color: '#006966' } :
              color === 'secondary' ? { background: 'rgba(255,140,66,0.1)', color: '#FF8C42' } :
              color === 'mint' ? { background: 'rgba(127,219,200,0.15)', color: '#006966' } :
              { background: 'rgba(255,209,102,0.15)', color: '#B8860B' };

  return (
    <div style={{
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(226,232,240,0.8)',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
      transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        {icon && (
          <div style={{
            width: '48px', height: '48px', borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            ...iconBg,
          }}>
            {icon}
          </div>
        )}
        {growth && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            padding: '4px 12px', borderRadius: '9999px',
            fontSize: '0.8125rem', fontWeight: 600,
            background: 'rgba(16,185,129,0.1)', color: '#059669',
          }}>
            {growth}
          </span>
        )}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#343A40' }}>{title}</h3>
      <p style={{ fontSize: '0.9375rem', color: '#6C757D', lineHeight: 1.6, marginBottom: '1rem' }}>{description}</p>
      {link && (
        <a href={link} style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: '#006966', fontWeight: 600, fontSize: '0.9375rem',
          transition: 'gap 150ms',
        }}>
          Saiba mais
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      )}
    </div>
  );
};
