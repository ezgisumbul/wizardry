import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('https://api.potterdb.com/v1/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="movies-page">
      {console.log(movies)}

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
