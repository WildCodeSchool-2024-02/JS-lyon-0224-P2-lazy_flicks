import { useState } from "react";
import "./Body.css";
import Description from "../Description/Description";

function Body() {
  const [isVisible, setIsVisible] = useState(false);
  // Définissez l'état local pour chaque case à cocher
  const [seriesChecked, setSeriesChecked] = useState(false);
  const [moviesChecked, setMoviesChecked] = useState(false);

  // Fonction pour mettre à jour l'état lorsqu'une case à cocher est cochée ou décochée
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "series") {
      setSeriesChecked(checked);
    } else if (name === "movies") {
      setMoviesChecked(checked);
    }
  };

  return (
    <main>
      <div className="card">
        <div className="genre">
          <h2>Genre :</h2>
          <span className="GenreInput">
            <select name="pets" id="pet-select">
              <option value="">Action</option>
              <option value="">Animation</option>
              <option value="">Anime</option>
              <option value="">Documentary</option>
              <option value="">Fantasy</option>
              <option value="">Horror</option>
              <option value="">Romance</option>
              <option value="">Sport</option>
              <option value="">Western</option>
              <option value="">Adult +18</option>
              <option value="">Surprise</option>
            </select>
          </span>
        </div>
        <div className="type">
          <h2>Type :</h2>
          <input
            type="checkbox"
            id="series"
            name="series"
            checked={seriesChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="series">TV Shows</label>
          <input
            type="checkbox"
            id="movies"
            name="movies"
            checked={moviesChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="movies">Films</label>
        </div>
        <div className="type">
          <h2>Type :</h2>
          <input type="checkbox" id="series" name="series" />
          <label htmlFor="series">TV Shows</label>
          <input type="checkbox" id="movies" name="movies" />
          <label htmlFor="movies">Films</label>
        </div>
        <div className="time">
          <h2>Time :</h2>
          <span className="TimeInput">
            <select name="pets" id="pet-select">
              <option value="">Less than 2h</option>
              <option value="">More than 2h</option>
              <option value="">I don't have any friends</option>
            </select>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="button-search"
          type="button"
        >
          {isVisible !== false ? "Search Again" : "Search"}
        </button>
      </div>
      <div>
        {isVisible !== false && (
          <div>
            <Description />
          </div>
        )}
      </div>
    </main>
  );
}
export default Body;
