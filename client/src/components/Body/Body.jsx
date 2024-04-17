import { useState } from "react";
import "./Body.css";
import Series from "../Series/Series";
import MovieType from "../MovieType/MovieType";

function Body() {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedType, setSelectedType] = useState(0);

  const handleTypeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
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
          <span className="TypeInput">
            <select
              name="Type"
              id="Type-select"
              value={selectedType}
              onChange={handleTypeChange}
            >
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
      {isVisible ? (
        <>
          {selectedType === "MovieValue" ? <MovieType /> : null}
          {selectedType === "TvShowValue" ? <Series /> : null}
        </>
      ) : null}
    </main>
  );
}
export default Body;
