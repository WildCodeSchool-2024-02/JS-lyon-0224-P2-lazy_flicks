import { useState } from "react";
import "./Body.css";
import Series from "../Series/Series";
import MovieType from "../MovieType/MovieType";
import Description from "../Description/Description";
import TopRated from "../TopRated/TopRated";

function Body() {
  const [topRatedChecked, setTopRatedChecked] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleSearch = () => {
    if (selectedGenre && selectedType) {
      setIsSectionVisible(true);
    }
  };

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
            <option value="">Select a type</option>
            <option value="MovieValue">Movie</option>
            <option value="TvShowValue">TV Show</option>
          </select>
        </div>
        <div className="Rated">
          <h2>Top Rated :</h2>
          <input
            type="checkbox"
            id="TopRated"
            name="Top Rated"
            checked={topRatedChecked}
            onChange={() => setTopRatedChecked(!topRatedChecked)}
          />
        </div>

        <button onClick={handleSearch} className="button-search" type="button">
          {isSectionVisible !== false ? "Search Again" : "Search"}
        </button>
      </div>
      {isSectionVisible !== false && selectedType === "MovieValue" && (
        <MovieType />
      )}

      {isSectionVisible !== false && selectedType === "TvShowValue" && (
        <Series />
      )}

      {isSectionVisible !== false && selectedGenre && (
        <div>
          <TopRated topRatedChecked={topRatedChecked} />
          <Description selectedGenre={selectedGenre} />
        </div>
      )}
    </main>
  );
}

export default Body;
