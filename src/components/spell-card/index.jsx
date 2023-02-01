import React from 'react';
import './index.css';

export const SpellCard = ({ spell }) => {
  return (
    <div className="card">
      <h4>Name: {spell.name}</h4>
      <h4>Category: {spell.category}</h4>
      <h4>Effect: {spell.effect}</h4>
      <img
        src={spell.image ? spell.image : 'wand.jpg'}
        alt={spell.name}
        className="spell-img"
      />
    </div>
  );
};
