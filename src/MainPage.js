import React from "react";
import { Link, NavLink } from "react-router-dom";
import mainPicture from "./assets/main-picture.png";
import playIcon from "./assets/play-button.png";

import "./MainPage.css";
import routePaths from "./routePaths";

function MainPage() {
  const backgroundStyle = { backgroundImage: `url(${mainPicture})` };

  let trailerLink;

  return (
    <>
      <div className="background-full-height-hack-outer" style={backgroundStyle}>
        <div className="background-full-height-hack-inner">
          <div className="top-links">
            <NavLink to={routePaths.ABOUT_RADP}>Rainy April Day Productions</NavLink>
            <NavLink to={routePaths.SYNOPSIS}>Synopsis</NavLink>
            <NavLink to={routePaths.FILMMAKERS}>Filmmakers</NavLink>
            <NavLink to={routePaths.DONATE}>Donate</NavLink>
            <NavLink to={routePaths.CONTACT}>Contact</NavLink>
          </div>
          {trailerLink && (
            <Link to={trailerLink}>
              <div className="trailer-link-area">
                <div className="watch-trailer-here">Watch Trailer Here</div>
                <div className="blurred-title">Tipsy</div>
                <img className="play-icon" alt="play-icon" src={playIcon} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
