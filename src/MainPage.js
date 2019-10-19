import React from "react";
import { Link } from "react-router-dom";
import mainPicture from "./assets/main-picture.png";
import playIcon from "./assets/play-button.png";

import "./MainPage.css";
import TopLinks from "./TopLinks";

function MainPage() {
  const backgroundStyle = { backgroundImage: `url(${mainPicture})` };

  let trailerLink = "something";

  return (
    <div className="main-page-and-background" style={backgroundStyle}>
      <div className="gradient-mask">
        <TopLinks isHome />
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
  );
}

export default MainPage;
