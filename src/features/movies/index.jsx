import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from './actions';
import * as moviesState from './selectors';

export const MoviesPage = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesState.movies);

  useEffect(() => {
    if (!movies) {
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
          {movies.map(
            (movie, index) =>
              movie.attributes.poster && (
                <Link to={`/movies/${movie.attributes.slug}`} key={index}>
                  <img
                    src={movie.attributes.poster}
                    alt={movie.attributes.title}
                    className="poster"
                  />
                </Link>
              )
          )}
        </div>
        <div aria-hidden="true" className="marquee-group">
          {movies.map(
            (movie, index) =>
              movie.attributes.poster && (
                <Link to={`/movies/${movie.attributes.slug}`} key={index}>
                  <img
                    src={movie.attributes.poster}
                    alt={movie.attributes.title}
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
