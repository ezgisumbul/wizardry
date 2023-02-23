import './index.css';

export const SpellCard = ({ spell, onCardClick }) => {
  return (
    <article data-spell={spell.slug} className="card" onClick={onCardClick}>
      <div className="card-content">
        <div className="card-front">
          <header className="card-top">
            <h2 className="spell-title">
              {spell.name.replace(/\/|&/, (match) => ` ${match} `)}
            </h2>
          </header>

          <img
            // optional chaning: src={spell?.attribute?.image?.url || 'wand.jpg'}
            src={spell.image || 'wand.jpg'}
            alt={spell.name}
            className="spell-img"
          />
        </div>

        <div className="card-back">
          <dl className="card-bottom">
            <div className="spell-info">
              <dt>Category:</dt>
              <dd>{spell.category}</dd>
            </div>
            <div className="spell-info">
              <dt>Effect:</dt>
              <dd>{spell.effect}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
};

// when the page is loaded if there is a hash, jump to the anchor
