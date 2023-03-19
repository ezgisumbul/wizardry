import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import './index.css';

export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="back-btn" onClick={goBack}>
        <MdArrowBackIosNew className="back-btn-chevron" />
        Back
      </button>
    </>
  );
};
