import "./Series.css";
import { useState, useEffect } from "react";

function Series() {
  const [series, setSeries] = useState([]);
  const [randomIndexSerie, setRandomIndexSerie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (!response.ok) {
          throw new Error("Failed to fetch series");
        }
        return response.json();
      })
      .then((data) => {
        setSeries(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (series.length > 0) {
      const randomIndex = Math.floor(Math.random() * series.length);
      setRandomIndexSerie(randomIndex);
    }
  }, [series]);

  const randomSerie = series[randomIndexSerie];

  const handleWatchButtonClick = () => {
    if (randomSerie) {
      window.open(
        `https://www.themoviedb.org/tv/${randomSerie.id}/watch`,
        "_blank"
      );
    }
  };

  return (
    <main className="container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {randomSerie && (
        <div key={randomSerie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${randomSerie.poster_path}`}
            alt={`Poster for ${randomSerie.original_name}`}
          />
          <div>
            <h3>{randomSerie.original_name}</h3>
            <p>
              <span className="rating">Rating :</span>
              {randomSerie.vote_average} / 10
            </p>
            <p>{randomSerie.overview}</p>
          </div>
        </div>
      )}

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
