import "./Description.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Description({ selectedGenre }) {
  const [movies, setMovies] = useState([]);
  const [randomIndexGenre, setRandomIndexGenre] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${selectedGenre}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `${apiKey}`,
          },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [selectedGenre]);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomIndexGenre(randomIndex);
    }
  }, [movies]);

  const randomMovie = movies[randomIndexGenre];

  const watchMovie = () => {
    if (randomMovie) {
      window.location.href = `https://www.themoviedb.org/movie/${randomMovie.id}/watch`;
    }
  };

  const movieElement = randomMovie && (
    <div key={randomMovie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
        alt={randomMovie.title}
      />
      <h3>{randomMovie.title}</h3>
      <p>
        <span className="rating">Rating :</span>
        {randomMovie.vote_average} / 10
      </p>
      <p>{randomMovie.overview}</p>
    </div>
  );

  return (
    <main className="container">
      <div>{movieElement}</div>

      <button className="button-watch" type="button" onClick={watchMovie}>
        Watch
      </button>
    </main>
  );
}

Description.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
};

export default Description;
