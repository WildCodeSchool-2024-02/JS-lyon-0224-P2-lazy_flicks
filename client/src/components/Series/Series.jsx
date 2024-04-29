import "../Description.css";
import { useState, useEffect } from "react";

function Series() {
  const [series, setSeries] = useState([]);
  const [randomIndexSerie, setRandomIndexSerie] = useState(null);

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
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=2",
      options
    )
      .then((response) => {
        if (response.ok !== true) {
          throw new Error("Failed to fetch series");
        }
        return response.json();
      })
      .then((data) => {
        setSeries(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (series.length > 0) {
      const randomIndex = Math.floor(Math.random() * series.length);
      setRandomIndexSerie(randomIndex);
    }
  }, [series]);

  const randomSerie = series[randomIndexSerie];

  const handleWatchButtonClick = () => {
    if (randomSerie !== null) {
      window.open(
        `https://www.themoviedb.org/tv/${randomSerie.id}/watch`,
        "_blank"
      );
    }
  };

  const randomSerieElement =
    randomSerie !== null && randomSerie !== undefined ? (
      <div className="principalDiv">
        <div className="imgDiv" key={randomSerie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${randomSerie.poster_path}`}
            alt={randomSerie.original_name}
          />
        </div>
        <div className="dateRate">
          <h2 className="selected-topRated">TV Show :</h2>

          <h2>{randomSerie.original_name}</h2>
          <span className="rating">Release date : </span>
          <p>{randomSerie.release_date}</p>
          <span className="rating">Rating :</span>
          <p>{randomSerie.vote_average} / 10</p>
        </div>
        <div className="overview">
          <p>{randomSerie.overview}</p>
        </div>
      </div>
    ) : null;

  return (
    <main className="container">
      <div>{randomSerieElement}</div>

      <button
        className="button-watch"
        type="button"
        onClick={handleWatchButtonClick}
      >
        Watch
      </button>
    </main>
  );
}

export default Series;
