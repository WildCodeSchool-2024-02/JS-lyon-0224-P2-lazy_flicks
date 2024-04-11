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
          <p className="series-movies">
            <span className="series">Series</span>
            <span className="movies">Movies</span>
          </p>
        </div>
        <div className="time">
          <h2>Time :</h2>
          <p className="time-movies">120min</p>
        </div>
        <div className="search">
          <button className="button-search" type="button">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
export default Body;
