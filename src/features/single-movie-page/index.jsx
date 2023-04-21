import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

export const SingleMoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [truncatedSummary, setTruncatedSummary] = useState('');
  const { slug } = useParams();
  const NUMBER_OF_WORDS = 30;
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleSummaryLength = () => {
    setIsTruncated(() => !isTruncated);
  };

  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/movies/${slug}`)
      .then((response) => response.json())
      .then((result) => {
        setMovie(result.data.attributes);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  useEffect(() => {
    const truncateSummary = async () => {
      let text = await movie.summary;
      const words = text.split(' ');

      text = '';

      for (let i = 0; i < NUMBER_OF_WORDS; i++) {
        text += words[i] + ' ';
      }
      text += '...';
      setTruncatedSummary(text);
    };

    truncateSummary();
  }, [setTruncatedSummary, movie]);

  return (
    <div className="single-movie-page">
      {console.log(movie)}
      {movie && (
        <>
          <section className="hero">
            <img
              src={`/hp-movie-${movie.order - 3}.jpeg`}
              alt=""
              className="background-img"
            />
            {/* <h1 className="title">{movie.title}</h1> */}
            <img src={movie.poster} alt={movie.title} className="poster" />
          </section>

          <div>
            <p className="summary">
              {isTruncated ? truncatedSummary : movie.summary}

              <button
                type="button"
                onClick={toggleSummaryLength}
                className="toggle-btn"
              >
                {isTruncated ? 'More' : 'Less'}
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};
