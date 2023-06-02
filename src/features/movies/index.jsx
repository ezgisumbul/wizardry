import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from './actions';
import * as moviesState from './selectors';

export const MoviesPage = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesState.movies);
  const isFetched = useSelector(moviesState.isFetched);

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchMovies());
    }
    // eslint-disable-next-line
  }, []);

  if (!movies) {
    return null;
  }

  console.log(movies);

  return (
    <div className="movies-page">
      <section className="marquee">
        <div className="marquee-group">
          {Object.values(movies).map(
            (movie) =>
              movie.poster && (
                <Link to={`/movies/${movie.slug}`} key={movie.slug}>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="poster"
                  />
                </Link>
              )
          )}
        </div>
        <div aria-hidden="true" className="marquee-group">
          {Object.values(movies).map(
            (movie) =>
              movie.poster && (
                <Link to={`/movies/${movie.slug}`} key={movie.slug}>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="poster"
                  />
                </Link>
              )
          )}
        </div>
      </section>
    </div>
  );
};
