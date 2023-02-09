import { useState } from 'react';
import './index.css';

export const SpellCard = ({ spell, onCardClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={isClicked ? 'card js-card clicked' : 'card js-card'}
      onClick={handleCardClick}
    >
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
        <h6 className="spell-info">Category: {spell.category}</h6>
        <h6 className="spell-info">Effect: {spell.effect}</h6>
      </div>
    </div>
  );
};

// document.addEventListener("click", )
// const card = document.querySelector('.js-card');

// const isClicked = event.target.classList.contains('clicked');
// if (event.target.classList.contains('js-card')) {
//   setIsClicked(!isClicked);
// }

// if (!isClicked) {
//   card.classList.add('clicked');
//   console.log(card.classList);
// }
