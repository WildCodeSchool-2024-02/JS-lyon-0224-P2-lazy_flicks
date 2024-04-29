import { useState } from "react";
import "./Body.css";
import Series from "../Series/Series";
import MovieType from "../MovieType/MovieType";
import Description from "../Description/Description";
import TopRated from "../TopRated/TopRated";
import ToggleButton from "../ToggleButton";

function Body() {
  const [topRatedChecked, setTopRatedChecked] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleSearch = () => {
    if (
      selectedGenre !== null &&
      selectedType !== null &&
      topRatedChecked !== false
    ) {
      setIsSectionVisible(true);
    }
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSearchAgain = () => {
    setIsSectionVisible(false);
    setSelectedGenre(null);
    setSelectedType(null);
    setTopRatedChecked(false);
  };

  return (
    <main>
      <div>
        <ToggleButton />
      </div>
      <div className="card">
        <div className="genre">
          <h2>Genre :</h2>
          <span className="genreInput">
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
          <select className="selectType" onChange={handleTypeChange}>
            <option value="">Select a type</option>
            <option value="MovieValue">Movie</option>
            <option value="TvShowValue">TV Show</option>
          </select>
        </div>
        <div className="rated">
          <h2>Top Rated :</h2>
          <input
            className="inputCheck"
            type="checkbox"
            id="TopRated"
            name="Top Rated"
            checked={topRatedChecked}
            onChange={() => setTopRatedChecked(!topRatedChecked)}
          />
        </div>

        <button
          onClick={
            isSectionVisible !== false ? handleSearchAgain : handleSearch
          }
          className="button-search"
          type="button"
        >
          {isSectionVisible !== false ? "Search Again" : "Search"}
        </button>
      </div>
      <div className="threeSection">
        {isSectionVisible !== false && selectedGenre !== null && (
          <Description selectedGenre={selectedGenre} />
        )}

        {isSectionVisible !== false && selectedType === "MovieValue" && (
          <MovieType />
        )}

        {isSectionVisible !== false && selectedType === "TvShowValue" && (
          <Series />
        )}

        {isSectionVisible !== false && selectedGenre !== null && (
          <TopRated topRatedChecked={topRatedChecked} />
        )}
      </div>
    </main>
  );
}

export default Body;
