import "./Description.css";
import { useState, useEffect } from "react";

function Description() {
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
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

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
