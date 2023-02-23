import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SpellCard } from '../../components/spell-card/index';
import './index.css';

export const SpellsPage = () => {
  const [spellList, setSpellList] = useState(null);

  // getting the hash
  const { hash } = useLocation();
  const { slug } = useParams();

  const handleCardClick = (event) => {
    // currentTarget is similar to target but gets to target anything inside that parent element with the
    // attribute instead of the link inside that element or the button or the p tag etc.
    const { currentTarget } = event;

    // setting the hash
    window.location.hash = currentTarget.getAttribute('data-spell');
    // console.log(event.currentTarget.getAttribute('id'));
  };

  useEffect(() => {
    fetch('https://api.potterdb.com/v1/spells')
      .then((response) => response.json())
      .then((result) => {
        setSpellList(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // early exit
    if (!hash || !spellList) {
      return;
    }
    const spell = hash.replace('#', '');
    const element = document.querySelector(`[data-spell=${spell}]`);

    if (element) {
      element.scrollIntoView();
    }
  }, [spellList, hash]);

  return (
    <div className="spell-page">
      {console.log(spellList)}
      <h1 className="spell-page-header">SPELLS</h1>
      <ul className="card-list">
        {spellList
          ? spellList.map((spell) => (
              <li key={spell.id}>
                <SpellCard
                  spell={spell.attributes}
                  onCardClick={handleCardClick}
                  id={spell.id}
                />
              </li>
            ))
          : 'loading'}
      </ul>
    </div>
  );
};
