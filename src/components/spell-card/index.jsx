import { Link } from 'react-router-dom';
import './index.css';

export const SpellCard = ({ spell, onCardClick, id }) => {
  return (
    // "data-spell" is an attribute I set. I could've used an existing attribute such as "id"
    // it, however has to follow this format "data-*".
    <Link to={`/spells/${id}`}>
      <article data-spell={spell.slug} className="card" onClick={onCardClick}>
        <div className="card-content">
          <div className="card-front">
            <header className="card-top">
              <h2 className="spell-title">
                {/* using replace method while specifying a function as the replacement
 to replace "/" with " / ". To search for the required text, RegExis used*/}
                {spell.name.replace(/\/|&/, (match) => ` ${match} `)}
              </h2>
            </header>

            <img
              // optional chaining: src={spell?.attribute?.image?.url || 'wand.jpg'}

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
    </Link>
  );
};
