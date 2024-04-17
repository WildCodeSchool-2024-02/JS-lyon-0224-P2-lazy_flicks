import { useState } from "react";
import "./Body.css";
import Series from "../Series/Series";
import MovieType from "../MovieType/MovieType";
import Description from "../Description/Description";

function Body() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSearch = () => {
    setIsVisible(true);
  };

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
            <select
              name="movie"
              id="movie-select"
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">Select a genre</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
              <option value="36">History</option>
              <option value="27">Horror</option>
              <option value="10402">Music</option>
              <option value="9648">Mystery</option>
              <option value="10749">Romance</option>
              <option value="878">Science Fiction</option>
              <option value="10770">TV Movie</option>
              <option value="53">Thriller</option>
              <option value="10752">War</option>
              <option value="37">Western</option>
            </select>
          </span>
        </div>
        <div className="genre">
          <h2>Type :</h2>
          <select onChange={handleTypeChange}>
            <option value="MovieValue">Movie</option>
            <option value="TvShowValue">TV Show</option>
          </select>
        </div>
        <button onClick={handleSearch} className="button-search" type="button">
          {isVisible !== false ? "Search Again" : "Search"}
        </button>
      </div>

      {isVisible ? (
        <>
          {selectedType === "MovieValue" ? <MovieType /> : null}
          {selectedType === "TvShowValue" ? <Series /> : null}
        </>
      ) : null}

      <div>
        {isVisible && selectedGenre && (
          <div>
            <Description selectedGenre={selectedGenre} />
          </div>
        )}
      </div>
    </main>
  );
}
export default Body;
