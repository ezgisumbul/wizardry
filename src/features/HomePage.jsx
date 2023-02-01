import { useEffect, useState } from 'react';
import { SpellCard } from '../components/SpellCard';

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
    <div>
      {console.log(spellList)}
      <h1>SPELLS</h1>
      {spellList &&
        spellList.map((spell) => (
          <SpellCard key={spell.id} spell={spell.attributes} />
        ))}
    </div>
  );
};

export default HomePage;
