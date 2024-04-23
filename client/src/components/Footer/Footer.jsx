import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="FooterLazy">
      <p className="Copyright">
        LazyFlicks Copyright © 2024 -<Link to="/team"> Team</Link>
      </p>
    </footer>
  );
}

export default Footer;
