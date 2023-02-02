import React from 'react';
import './index.css';

export const SpellCard = ({ spell }) => {
  return (
    <div className="card">
      <div className="card-top">
        <h3 className="spell-title">
          {spell.name.includes('/')
            ? spell.name.split('/').join(' / ')
            : spell.name}
        </h3>
        <img
          src={spell.image ? spell.image : 'wand.jpg'}
          alt={spell.name}
          className="spell-img"
        />
      </div>
      <div className="card-bottom">
        <h6>Category: {spell.category}</h6>
        <h6>Effect: {spell.effect}</h6>
      </div>
    </div>
  );
};
