import { useState, useEffect } from "react";
import "../Description.css";
import PropTypes from "prop-types";

function TopRated({ topRatedChecked }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (topRatedChecked !== false) {
      const ApiKey = import.meta.env.VITE_API_KEY;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `${ApiKey}`,
        },
      };

      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          const randomMovie = data.results[randomIndex];
          setMovies(randomMovie !== null ? [randomMovie] : []);
        })
        .catch((err) => console.error(err));
    }
  }, [topRatedChecked]);

  const handleWatchButtonClick = () => {
    if (movies.length > 0) {
      const movieId = movies[0].id;
      window.open(
        `https://www.themoviedb.org/movie/${movieId}/watch`,
        "_blank"
      );
    }
  };

  const movieElements = movies.map((movie) => (
    <div className="principalDiv" key={movie.id}>
      <div className="imgDiv">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="dateRate">
        <h2 className="selected-topRated">Top Rated :</h2>

        <h2>{movie.title}</h2>
        <span className="rating">Release date : </span>
        <p>{movie.release_date}</p>
        <span className="rating">Rating :</span>
        <p>{movie.vote_average} / 10</p>
      </div>

      <div className="overview">
        <p>{movie.overview}</p>
      </div>
    </div>
  ));

  TopRated.propTypes = {
    topRatedChecked: PropTypes.bool.isRequired,
  };

  return (
    <main className="container">
      {topRatedChecked !== false && <div>{movieElements}</div>}

      {topRatedChecked !== false && (
        <button
          className="button-watch"
          type="button"
          onClick={handleWatchButtonClick}
        >
          Watch
        </button>
      )}
    </main>
  );
}

export default TopRated;
