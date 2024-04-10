import { useEffect, useState } from "react";
import "./Body.css";
import axios from "axios";

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/157336?api_key=d153b88aa2e55557f40150e3cf446757"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console(error);
      });
  }, []);
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
            <span>Movies</span>
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
      <div>
        {data && data.title && <p>{data.title}</p>}
        {data && data.overview && <p>{data.overview}</p>}
        {data && data.release_date && <p>{data.release_date}</p>}
      </div>
    </main>
  );
}
export default Body;
