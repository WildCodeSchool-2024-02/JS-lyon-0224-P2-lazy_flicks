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
          <span className="TypeInput">
            <select name="Type" id="Type-select">
              <option value="MovieValue">Movie</option>
              <option value="TvShowValue">TV Show</option>
            </select>
          </span>
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
