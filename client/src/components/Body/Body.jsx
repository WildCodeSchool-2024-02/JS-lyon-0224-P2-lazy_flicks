import "./Body.css";

function Body() {
  return (
    <main>
      <div className="card">
        <div className="genre">
          <h2>Genre :</h2>
          <p className="thriller">Thriller</p>
        </div>
        <div className="type">
          <h2>Type :</h2>
          <div className="series">
            <input type="checkbox" id="series" name="series" />
            <label htmlFor="series">Series</label>
          </div>
          <div className="movies">
            <input type="checkbox" id="movies" name="movies" />
            <label htmlFor="movies">Movies</label>
          </div>
        </div>
        <div className="time">
          <h2>Time :</h2>
          <p className="time-movies">120min</p>
        </div>
        <button className="button-search" type="button">
          Search
        </button>
      </div>
    </main>
  );
}
export default Body;
