import "./Series.css";
import { useState, useEffect } from "react";

function Series() {
  const [series, setSeries] = useState([]);

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
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setSeries(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="container">
      {series.map((serie) => (
        <div key={serie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
            alt={serie.original_name}
          />
          <div>
            <h3>{serie.original_name}</h3>
            <p>
              <span className="rating">Rating :</span>
              {serie.vote_average} / 10
            </p>
            <p>{serie.overview}</p>
          </div>
        </div>
      ))}

      <button className="button-watch" type="button">
        Watch
      </button>
    </main>
  );
}

export default Series;
