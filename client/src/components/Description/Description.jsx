import "./Description.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Description({ selectedGenre }) {
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
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${selectedGenre}`;

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, [selectedGenre]);

  const movieElements = movies.map((movie) => (
    <div key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>
        <span className="rating">Rating :</span>
        {movie.vote_average} / 10
      </p>
      <p>{movie.overview}</p>
    </div>
  ));
  Description.propTypes = {
    selectedGenre: PropTypes.string.isRequired,
  };
  return (
    <main className="container">
      <div>{movieElements}</div>
    </main>
  );
}

export default Description;
