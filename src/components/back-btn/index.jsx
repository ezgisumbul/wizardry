import { useNavigate } from 'react-router-dom';
import './index.css';

export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="back-btn" onClick={goBack}>
        Back
      </button>
    </>
  );
};
