import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SpellCard } from '../../components/spell-card/index';
import './index.css';
import { Search } from '../../components/search';
import { ExploreButton } from '../../components/explore-btn';
import { useDispatch, useSelector } from 'react-redux';
import * as spellsState from './selector';
import { fetchSpells } from './actions';

export const SpellsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultList, setResultList] = useState([]);
  const dispatch = useDispatch();
  const spellList = useSelector(spellsState.spells);

  // getting the hash
  const { hash } = useLocation();

  const handleCardClick = (event) => {
    // currentTarget is similar to target but gets to target anything inside that parent element with the
    // attribute instead of the link inside that element or the button or the p tag etc.
    const { currentTarget } = event;

    // setting the hash
    window.location.hash = currentTarget.getAttribute('data-spell');
  };

  const handleScroll = () => {};

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTermDeletion = () => {
    setSearchTerm('');
    setResultList(spellList);
  };

  useEffect(() => {
    if (!spellList) {
      dispatch(fetchSpells());
    }
    // eslint-disable-next-line
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

  if (!spellList) {
    return null;
  }

  console.log(spellList);

  return (
    <div className="spell-page">
      <div className="spell-page-hero">
        <p className="spell-page-description">
          From Wingardium Leviosa <br />
          to Avada Kedavra, <br />
          welcome <br />
          to your Charms and Dark Arts class
        </p>
        <ExploreButton onButtonClick={handleScroll} />
      </div>

      <Search
        searchInput={'spell'}
        onInputChange={handleInputChange}
        resultList={resultList}
        searchTerm={searchTerm}
        onSearchTermDeletion={handleSearchTermDeletion}
      />

      <ul className="card-list">
        {spellList?.map((spell) => {
          const shouldBeVisible = searchTerm
            ? spell.attributes.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            : true;

          return shouldBeVisible ? (
            <li key={spell.id}>
              <SpellCard spell={spell} onCardClick={handleCardClick} />
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};
