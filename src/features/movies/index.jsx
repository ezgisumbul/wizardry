import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAndStoreData } from './../../actions/index';

export const MoviesPage = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.potterdb.com/v1/movies')
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setMovies(result.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const movies = data.data;

  useEffect(() => {
    // Dispatch an action to fetch and store data
    dispatch(fetchAndStoreData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movies-page">
      {movies && (
        <section className="marquee">
          <div className="marquee-group">
            {console.log(movies, 'HELLO')}
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
      )}
    </div>
  );
};
