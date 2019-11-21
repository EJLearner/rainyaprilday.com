import React from 'react';
import mainPicture from './assets/main-picture.png';
import playIcon from './assets/play-button.png';

import './MainPage.css';
import TopLinks from './TopLinks.tsx';

function MainPage() {
  const backgroundStyle = {backgroundImage: `url(${mainPicture})`};

  return (
    <div className="another-div">
      <div className="main-page-and-background" style={backgroundStyle}>
        <div className="gradient-mask">
          <TopLinks isHome />
          <a className="trailer-link-area" href="https://vimeo.com/368163654/ba50ac3309">
            <div className="watch-trailer-here">Watch Trailer Here</div>
            <div className="blurred-title">Tipsy</div>
            <img alt="play-icon" className="play-icon" src={playIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
