import "./Description.css";
import { useState, useEffect } from "react";

function Description() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTUzYjg4YWEyZTU1NTU3ZjQwMTUwZTNjZjQ0Njc1NyIsInN1YiI6IjY2MTAwNTUzNDk3NTYwMDE2NDRlNTY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3TBcwlf8-XRG3fGNcNSfF1mf0fTlFfScJjzqTGXq-cc",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  const movieElements = movies.slice(1, 2).map((movie) => (
    <div key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h3>{movie.title}</h3>
        <p>Vote moyen : {movie.vote_average}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  ));

  return (
    <main className="container">
      <div>{movieElements}</div>

      <button className="button-watch" type="button">
        Watch
      </button>
    </main>
  );
}

export default Description;
