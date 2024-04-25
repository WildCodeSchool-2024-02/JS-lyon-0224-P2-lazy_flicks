import "./Team.css";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="TeamContainer">
      <Link to="/" className="BackButton">
        Main Page
      </Link>
      <div className="RomDesc">
        <img
          className="RomainImg"
          src="src/assets/images/RomainImg.png"
          alt="Romain"
        />
        <h2 className="TeamMember">ROMAIN</h2>
        <p className="DescMember">
          Romain is the embodiment of warmth and joy in our workplace. His
          infectious laughter and positive energy have a way of lighting up the
          room, making even the toughest days feel a little brighter.
        </p>
      </div>
      <div className="AlpDesc">
        <img className="AlpImg" src="src/assets/images/AlpImg.png" alt="Alp" />
        <h2 className="TeamMember">ALP</h2>
        <p className="DescMember">
          Alp is the epitome of kindness in our team. Always with a warm smile
          and a helping hand, he brightens up everyone's day. His genuine
          empathy and willingness to support others.
        </p>
      </div>
      <div className="ThienDesc">
        <img
          className="ThienImg"
          src="src/assets/images/ThienImg.png"
          alt="Thien"
        />
        <h2 className="TeamMember">THIEN</h2>
        <p className="DescMember">
          Thien's creativity knows no bounds, consistently crafting designs that
          leave us in awe. His attention to detail and innovative approach bring
          a unique flair to every project he touches.
        </p>
      </div>
    </div>
  );
}

export default Team;
