import { BsChevronCompactDown } from 'react-icons/bs';
import './index.css';

export const ExploreButton = (props) => {
  return (
    <button className="explore-btn" type="button" onClick={props.onButtonClick}>
      <span>Explore spells</span>
      <BsChevronCompactDown className="explore-btn-chevron" />
    </button>
  );
};
