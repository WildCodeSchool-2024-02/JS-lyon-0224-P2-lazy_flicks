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
    setIsSectionVisible(true);
  };

  const handleTypeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
  };

  const getGenreName = (value) => {
    switch (value) {
      case "28":
        return "Action";
      case "12":
        return "Adventure";
      case "16":
        return "Animation";
      case "35":
        return "Comedy";
      case "80":
        return "Crime";
      case "99":
        return "Documentary";
      case "18":
        return "Drama";
      case "10751":
        return "Family";
      case "14":
        return "Fantasy";
      case "36":
        return "History";
      case "27":
        return "Horror";
      case "10402":
        return "Music";
      case "9648":
        return "Mystery";
      case "10749":
        return "Romance";
      case "878":
        return "Science Fiction";
      case "10770":
        return "TV Movie";
      case "53":
        return "Thriller";
      case "10752":
        return "War";
      case "37":
        return "Western";
      default:
        return "";
    }
  };

  const currentType = selectedType === "MovieValue" ? "Movie" : "TV Show"; // on garde la valeur pour la réuitiliser "Type"
  const currentGenre = getGenreName(selectedGenre); // on garde la valeur pour la réuitiliser "Genre"

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
          {isSectionVisible ? "Search Again" : "Search"}
        </button>
      </div>

      {isSectionVisible && selectedType === "MovieValue" && <MovieType />}

      {isSectionVisible && selectedType === "TvShowValue" && <Series />}

      {isSectionVisible && selectedGenre && (
        <div>
          <TopRated topRatedChecked={topRatedChecked} />
          <Description selectedGenre={selectedGenre} />
        </div>
      )}
      <h2>{currentGenre}</h2>
      <h2>{currentType}</h2>
    </main>
  );
}
export default Body;
