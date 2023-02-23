import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SpellCard } from '../../components/spell-card/index';
import './index.css';

const SpellPage = () => {
  const [spellList, setSpellList] = useState(null);
  const { hash } = useLocation();
  const { slug } = useParams();

  const handleCardClick = (event) => {
    const { currentTarget } = event;

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
    //  I already have the id in the SpellCard but I need to either lift them up to this page or pass this down to SpellCard. This is duplicate
    const spell = hash.replace('#', '');
    const element = document.querySelector(`[data-spell=${spell}]`);
    console.log({
      element
    });
    // console.log(document.getElementById(hash.replace('#', '')));
    if (element) {
      element.scrollIntoView();
    }
  }, [spellList, hash]);

  return (
    <div className="spell-page">
      <h1 className="spell-page-header">SPELLS</h1>
      <ul className="card-list">
        {spellList
          ? spellList.map((spell) => (
              <li key={spell.id}>
                <SpellCard
                  spell={spell.attributes}
                  onCardClick={handleCardClick}
                />
              </li>
            ))
          : 'loading'}
      </ul>
    </div>
  );
};

export default SpellPage;

// Create a page for single spell by linking to the slug on click
// also a back button :D
// fetch the data for just one spell on the single spell page
