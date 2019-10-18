import React from "react";
import { Link } from "react-router-dom";
import mainPicture from "./assets/main-picture.png";
import playIcon from "./assets/play-button.png";

import "./MainPage.css";
import routePaths from "./routePaths";

function MainPage() {
  const backgroundStyle = { backgroundImage: `url(${mainPicture})` };

  return (
    <>
      <div className="background-full-height-hack-outer" style={backgroundStyle}>
        <div className="background-full-height-hack-inner">
          <div className="top-links">
            <Link to={routePaths.ABOUT_RADP}>Rainy April Day Productions</Link>
            <Link to={routePaths.SYNOPSIS}>Synopsis</Link>
            <Link to={routePaths.FILMMAKERS}>Filmmakers</Link>
            <Link to={routePaths.DONATE}>Donate</Link>
            <Link to={routePaths.CONTACT}>Contact</Link>
          </div>
          <Link>
            <div className="trailer-link-area">
              <div className="watch-trailer-here">Watch Trailer Here</div>
              <div className="blurred-title">Tipsy</div>
              <img className="play-icon" alt="play-icon" src={playIcon} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainPage;
