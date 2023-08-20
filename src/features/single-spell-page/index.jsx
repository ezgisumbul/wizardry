import './index.css';
import { BackButton } from '../../components/back-btn';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as spellsState from './selector';
import { fetchSpells } from './../spells-page/actions';

export const SingleSpellPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const spells = useSelector(spellsState.spells);
  const spell = spells?.[slug];

  useEffect(() => {
    if (!spell) {
      dispatch(fetchSpells(slug));
    }
    // eslint-disable-next-line
  }, []);

  if (!spell) {
    return null;
  }

  console.log(spell);

  return (
    <div className="single-spell-page">
      <BackButton className="single-spell-back-btn" />
      <div className="single-spell-wrapper">
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
      </div>
    </div>
  );
};
