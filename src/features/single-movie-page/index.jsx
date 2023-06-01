import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import cx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { movieState } from './selectors';
import { fetchSingleMovie } from './actions';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const SingleMoviePage = () => {
  // const [movie, setMovie] = useState(null);
  const [isTruncated, setIsTruncated] = useState(true);
  const { slug } = useParams();
  const dispatch = useDispatch();

  // why couldn't I add line 36 inside this useSelector. I know it is a function. I also tried inside the
  // selector to add return state.movie.attributes but didn't work. How can I better write this?

  let movie = useSelector(movieState);

  const toggleSummaryLength = () => {
    setIsTruncated(() => !isTruncated);
  };

  useEffect(() => {
    if (!movie) {
      dispatch(fetchSingleMovie(slug));
    }

    // eslint-disable-next-line
  }, []);

  if (!movie) {
    return null;
  }

  movie = movie.attributes;

  console.log(movie);

  return (
    <main className="single-movie-page">
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
