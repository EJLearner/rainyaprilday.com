import React from "react";
import mainPicture from "./assets/main-picture.png";

import "./MainPage.css";

function MainPage() {
  const backgroundStyle = { backgroundImage: `url(${mainPicture})` };

  return (
    <div className="background-full-height-hack-outer" style={backgroundStyle}>
      <div className="background-full-height-hack-inner">
        <div className="top-links">
          <div>Rainy April Day Productions</div>
          <div>Synopsis</div>
          <div>Filmmakers</div>
          <div>Donate</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
