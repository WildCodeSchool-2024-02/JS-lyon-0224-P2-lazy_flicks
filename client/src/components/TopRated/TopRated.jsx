import { useState, useEffect } from "react";
import "./TopRated.css";
import PropTypes from "prop-types";

function TopRated({ topRatedChecked }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const ApiKey = import.meta.env.VITE_API_KEY;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${ApiKey}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        if (topRatedChecked) {
          const sortedMovies = data.results.sort(
            (a, b) => b.vote_average - a.vote_average
          );
          const highestRated = sortedMovies.length > 0 ? sortedMovies[0] : null;
          setMovies(highestRated ? [highestRated] : []);
        } else {
          setMovies(data.results);
        }
      })
      .catch((err) => console.error(err));
  }, [topRatedChecked]);

  const movieElements = movies.map((movie) => (
    <div key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h3>{movie.title}</h3>
        <p>
          <span className="rating">Rating :</span>
          {movie.vote_average} / 10
        </p>
        <p>{movie.overview}</p>
      </div>
    </div>
  ));

  TopRated.propTypes = {
    topRatedChecked: PropTypes.string.isRequired,
  };

  return (
    <main className="container">
      <div>{movieElements}</div>
      <button className="button-watch" type="button">
        Watch
      </button>
    </main>
  );
}

export default TopRated;
