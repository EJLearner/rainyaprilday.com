import React from "react";
import { Link } from "react-router-dom";

import "./TopLinks.css";
import routePaths from "./routePaths";

function TopLinks() {
  return (
    <div className="about-and-other-links">
      <div>
        <Link to={routePaths.MAIN}>Home</Link>
      </div>
      <div>
        <Link to={routePaths.ABOUT_RADP}>About</Link>
      </div>
      <div>
        <Link to={routePaths.FILMMAKERS}>Filmmakers Featurette</Link>
      </div>
      <div>
        <Link to={routePaths.DONATE}>Donate</Link>
      </div>
      <div>
        <Link to={routePaths.CONTACT}>Contact</Link>
      </div>
    </div>
  );
}

export default TopLinks;
