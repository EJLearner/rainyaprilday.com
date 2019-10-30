import React from "react";
import { Link } from "react-router-dom";
import mainPicture from "./assets/main-picture.png";
import playIcon from "./assets/play-button.png";

import "./MainPage.css";
import TopLinks from "./TopLinks";

function MainPage() {
  const backgroundStyle = { backgroundImage: `url(${mainPicture})` };

  return (
    <div className="main-page-and-background" style={backgroundStyle}>
      <div className="gradient-mask">
        <TopLinks isHome />
        <a className="trailer-link-area" href="https://vimeo.com/368163654/ba50ac3309">
          <div className="watch-trailer-here">Watch Trailer Here</div>
          <div className="blurred-title">Tipsy</div>
          <img className="play-icon" alt="play-icon" src={playIcon} />
        </a>
      </div>
    </div>
  );
}

export default MainPage;
