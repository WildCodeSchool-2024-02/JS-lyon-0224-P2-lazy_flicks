import "./MovieType.css";
import { useState, useEffect } from "react";

function MovieType() {
  const [moviesType, setMoviesType] = useState([]);

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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&per_page=?_limit=10",
      options
    )
      .then((response) => response.json())
      .then((data) => setMoviesType(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="container">
      {moviesType.map((movie) => (
        <div className="PrincipalDiv" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h3>{movie.title}</h3>
            <p>
              <span className="rating">Release date : </span>
              {movie.release_date}
            </p>
            <p>
              <span className="rating">Rating : </span>
              {movie.vote_average} / 10
            </p>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}

      <button className="button-watch" type="button">
        Watch
      </button>
    </main>
  );
}

export default MovieType;
