import React from "react";
import { Link } from "react-router-dom";
import mainPicture from "./assets/main-picture.png";

import "./MainPage.css";

function MainPage() {
  const backgroundStyle = { backgroundImage: `url(${mainPicture})` };

  return (
    <div className="background-full-height-hack-outer" style={backgroundStyle}>
      <div className="background-full-height-hack-inner">
        <div className="top-links">
          <Link>Rainy April Day Productions</Link>
          <Link>Synopsis</Link>
          <Link>Filmmakers</Link>
          <Link>Donate</Link>
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
