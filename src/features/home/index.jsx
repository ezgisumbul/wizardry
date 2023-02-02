import { useEffect, useState } from 'react';
import { SpellCard } from './../../components/spell-card/index';
import './index.css';

const HomePage = () => {
  const [spellList, setSpellList] = useState(null);

  useEffect(() => {
    fetch('https://api.potterdb.com/v1/spells')
      .then((response) => response.json())
      .then((result) => {
        setSpellList(result.data);
        console.log(spellList);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="spell-page">
      {console.log(spellList)}
      <h1 className="spell-page-header">SPELLS</h1>
      <div className="card-list">
        {spellList &&
          spellList.map((spell) => (
            <SpellCard key={spell.id} spell={spell.attributes} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
