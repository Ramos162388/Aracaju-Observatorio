import React from 'react';

export var CardPremium = function(props) {
  var title = props.title;
  var description = props.description;
  var icon = props.icon;
  var color = props.color || 'primary';
  var growth = props.growth;
  var link = props.link;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.25)',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      transition: 'all 250ms ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        {icon && (
          <div style={{
            width: '56px', height: '56px', borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
            background: color === 'primary' ? 'rgba(0,105,102,0.1)' : color === 'orange' ? 'rgba(255,140,66,0.1)' : 'rgba(127,219,200,0.15)',
            color: color === 'primary' ? '#006966' : color === 'orange' ? '#FF8C42' : '#006966',
          }}>{icon}</div>
        )}
        {growth && (
          <span style={{
            padding: '4px 14px', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 700,
            background: 'rgba(255,209,102,0.2)', color: '#B8860B',
          }}>{growth}</span>
        )}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#212529' }}>{title}</h3>
      <p style={{ fontSize: '0.9375rem', color: '#6C757D', lineHeight: 1.6, marginBottom: '1rem' }}>{description}</p>
      {link && (
        <a href={link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#006966', fontWeight: 700, fontSize: '0.9375rem' }}>
          Saiba mais
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      )}
    </div>
  );
};
