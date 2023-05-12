import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import cx from 'clsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const SingleMoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [isTruncated, setIsTruncated] = useState(true);
  const { slug } = useParams();

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

  if (!movie) {
    return null;
  }

  return (
    <main className="single-movie-page">
      {console.log({ movie })}

      <header
        className="hero"
        style={{ backgroundImage: `url(/movie-bg-${movie.slug}.jpeg)` }}
      >
        <h1 className="movie-title">
          {movie.title.includes('and')
            ? movie.title.split('and').map((str, i) => (
                <Fragment key={i}>
                  <p>{str}</p>
                  {i % 2 === 0 && <p>and</p>}
                </Fragment>
              ))
            : movie.title}
        </h1>
      </header>

      <figure className="poster-box">
        <img src={movie.poster} alt={movie.title} className="poster-img" />
      </figure>

      <article className="movie-info">
        <h2 className="info-title">Summary</h2>
        <p
          className={cx('summary', {
            'line-clamp': isTruncated
          })}
        >
          {movie.summary}
        </p>
        <button
          type="button"
          onClick={toggleSummaryLength}
          className="toggle-btn"
        >
          {isTruncated ? 'More' : 'Less'}
        </button>
      </article>
      <article className="movie-info ratio ratio-16x9">
        <h2 className="info-title">Trailer</h2>
        <div className="player-container">
          <iframe
            className="trailer"
            src={movie.trailer.replace('watch?v=', 'embed/')}
            title="Trailer"
            allowFullScreen
            width={560 * 1.7}
            height={315 * 1.7}
          ></iframe>
        </div>
      </article>
    </main>
  );
};
