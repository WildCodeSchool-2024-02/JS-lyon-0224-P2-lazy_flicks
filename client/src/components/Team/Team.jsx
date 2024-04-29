import "./Team.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Team() {
  return (
    <div className="teamContainer">
      <Link to="/" className="backButton">
        Main Page
      </Link>
      <div>
        <Header />
      </div>
      <div className="romDesc">
        <div className="figure">
          <img
            className="sirv image-main"
            src="src/assets/images/RomainImg.png"
            alt="Romain"
          />
          <img
            className="sirv image-hover"
            src="src/assets/images/RomainImg2.png"
            alt="Romain"
          />
        </div>
        <h2 className="teamMember">ROMAIN</h2>
        <p className="descMember">
          Romain is the embodiment of warmth and joy in our workplace. His
          infectious laughter and positive energy have a way of lighting up the
          room, making even the toughest days feel a little brighter.
        </p>
      </div>
      <div className="alpDesc">
        <div className="figure">
          <img
            className="sirv image-main"
            src="src/assets/images/AlpImg.png"
            alt="Alp"
          />
          <img
            className="sirv image-hover"
            src="src/assets/images/AlpImg2.png"
            alt="Alp"
          />
        </div>
        <h2 className="teamMember">ALP</h2>
        <p className="descMember">
          Alp is the epitome of kindness in our team. Always with a warm smile
          and a helping hand, he brightens up everyone's day. His genuine
          empathy and willingness to support others.
        </p>
      </div>
      <div className="thienDesc">
        <div className="figure">
          <img
            className="sirv image-main"
            src="src/assets/images/ThienImg.png"
            alt="thien"
          />
          <img
            className="sirv image-hover"
            src="src/assets/images/ThienImg2.png"
            alt="thien"
          />
        </div>
        <h2 className="teamMember">THIEN</h2>
        <p className="descMember">
          Thien's creativity knows no bounds, consistently crafting designs that
          leave us in awe. His attention to detail and innovative approach bring
          a unique flair to every project he touches.
        </p>
      </div>
    </div>
  );
}

export default Team;
