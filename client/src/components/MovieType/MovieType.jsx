import "./MovieType.css";
import { useState, useEffect } from "react";

function MovieType() {
  const [moviesType, setMoviesType] = useState([]);
  const [randomIndexMovie, setRandomIndexMovie] = useState(null);

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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=8&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => setMoviesType(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (moviesType.length > 0) {
      const randomIndex = Math.floor(Math.random() * moviesType.length);
      setRandomIndexMovie(randomIndex);
    }
  }, [moviesType]);

  const randomMovie = moviesType[randomIndexMovie];

  return (
    <main className="container">
      {randomMovie && (
        <div className="PrincipalDiv">
          <div className="ImgDiv" key={randomMovie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
              alt={randomMovie.title}
            />
          </div>
          <div className="DateRate">
            <h2>{randomMovie.title}</h2>
            <span className="rating">Release date : </span>
            <p>{randomMovie.release_date}</p>
            <span className="rating">Rating : </span>
            <p>{randomMovie.vote_average} / 10</p>
          </div>

          <div className="Overview">
            <p>{randomMovie.overview}</p>
          </div>
        </div>
      )}

      <button className="button-watch" type="button">
        Watch
      </button>
    </main>
  );
}

export default MovieType;
