import { useState } from "react";
import "./Body.css";
import Description from "../Description/Description";

function Body() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main>
      <div className="card">
        <div className="genre">
          <h2>Genre :</h2>
          <span className="GenreInput">
            <select name="movie" id="movie-select">
              <option value="Action">Action</option>
              <option value="Aventure">Aventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Music">Music</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="TV Movie">TV Movie</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
              <option value="Western">Western</option>
            </select>
          </span>
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
