import './index.css';
import { BackButton } from '../../components/back-btn';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const SingleSpellPage = () => {
  const { slug } = useParams();

  const [spell, setSpell] = useState(null);

  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/spells/${slug}`)
      .then((response) => response.json())
      .then((result) => {
        setSpell(result.data.attributes);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  // for (const attribute in spell) {
  //   // console.log(`${attribute}: ${spell[attribute]}`);
  // }

  return (
    <div className="single-spell-page">
      <BackButton className="single-spell-back-btn" />
      <div className="single-spell-wrapper">
        {spell ? (
          <section className="single-spell">
            <header>
              <h2 className="single-spell-title">{spell.name}</h2>
            </header>

            <div className="single-spell-content">
              <img
                className="single-spell-img"
                src={spell.image || '/wand.jpg'}
                alt={spell.name}
              />

              <div className="single-spell-details">
                {spell.creator ? (
                  <div className="single-spell-attribute">
                    <dt>Creator:</dt>
                    <dd>{spell.creator}</dd>
                  </div>
                ) : (
                  ''
                )}

                {spell.effect ? (
                  <div className="single-spell-attribute">
                    <dt>Effect:</dt>
                    <dd>{spell.effect}</dd>
                  </div>
                ) : (
                  ''
                )}

                {spell.hand ? (
                  <div className="single-spell-attribute">
                    <dt>Hand:</dt>
                    <dd>{spell.hand}</dd>
                  </div>
                ) : (
                  ''
                )}

                {spell.incantation ? (
                  <div className="single-spell-attribute">
                    <dt>Incantation:</dt>
                    <dd>{spell.incantation}</dd>
                  </div>
                ) : (
                  ''
                )}

                {spell.light ? (
                  <div className="single-spell-attribute">
                    <dt>Light:</dt>
                    <dd>{spell.light}</dd>
                  </div>
                ) : (
                  ''
                )}

                {spell.wiki ? (
                  <div className="single-spell-attribute link">
                    <dt>Wiki:</dt>
                    <dd>
                      <Link to={spell.wiki}>{spell.wiki}</Link>
                    </dd>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </section>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
