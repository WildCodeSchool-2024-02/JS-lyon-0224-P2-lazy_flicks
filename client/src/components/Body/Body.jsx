import "./Body.css";

function Body() {
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
            </select>
          </span>
        </div>
        <div className="type">
          <h2>Type :</h2>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="series">TV Shows</label>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="smovies">Films</label>
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
        <button className="button-search" type="button">
          Search
        </button>
      </div>
    </main>
  );
}
export default Body;
