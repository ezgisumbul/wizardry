import { TfiClose } from 'react-icons/tfi';
import './index.css';

export const Search = (props) => {
  return (
    <div className="search-area">
      <input
        className="search-input"
        type="text"
        onChange={(event) => props.onInputChange(event)}
        value={props.searchTerm}
        placeholder={`Search ${props.searchInput}`}
      />
      <TfiClose
        onClick={() => props.onSearchTermDeletion()}
        style={{
          color: 'rgb(247, 232, 145)',
          width: '1.6rem',
          height: '1.6rem'
        }}
      />
    </div>
  );
};
