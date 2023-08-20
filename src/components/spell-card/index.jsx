import { Link } from 'react-router-dom';
import './index.css';

export const SpellCard = ({ spell, onCardClick }) => {
  const { image, name, category, slug, effect } = spell;

  return (
    // "data-spell" is an attribute I set. I could've used an existing attribute such as "id"
    // it, however has to follow this format "data-*".
    <Link to={`/spells/${slug}`}>
      <article data-spell={slug} className="card" onClick={onCardClick}>
        <div className="card-content">
          <div className="card-front">
            <header className="card-top">
              <h2 className="spell-title">
                {/* using replace method while specifying a function as the replacement
 to replace "/" with " / ". To search for the required text, RegExis used*/}
                {name.replace(/\/|&/, (match) => ` ${match} `)}
              </h2>
            </header>

            <img
              // optional chaining: src={spell?.attribute?.image?.url || 'wand.jpg'}

              src={image || 'wand.jpg'}
              alt={name}
              className="spell-img"
            />
          </div>

          <div className="card-back">
            <dl className="card-bottom">
              <div className="spell-info">
                <dt className="spell-info-dt">Category:</dt>
                <dd className="spell-info-dd">{category}</dd>
              </div>
              <div className="spell-info">
                <dt className="spell-info-dt">Effect:</dt>
                <dd className="spell-info-dd">{effect}</dd>
              </div>
            </dl>
          </div>
        </div>
      </article>
    </Link>
  );
};
