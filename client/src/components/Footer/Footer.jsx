import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerLazy">
      <p className="copyright">
        LazyFlicks Copyright © 2024 -
        <Link to="/team" className="teamButton">
          Team
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
