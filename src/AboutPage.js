import React from "react";

import "./AboutPage.css";
import withPageWrapper from "./withPageWrapper";

function AboutPage() {
  return (
    <div className="about-paragraph">
      <p>
        Founded in 2019 by April Day, Rainy April Day Productions aspires to have fun telling stories we find
        entertaining and thought-provoking without pretense or pretention. Our company is committed to developing
        stories using experimental and traditional filmmaking methods, while championing the traditionally
        underrepresented filmmaker and providing a platform to produce quality film and television projects. Rainy April
        Day upholds that genre storytelling, particularly horror, has a place in cinematic expression. Our work embraces
        the belief that even the most ordinary experiences can become unique and powerful stories when told from our
        diverse perspectives.
      </p>
      <p>Founder/CEO=April Day</p>
      <p>President=Earl Jones</p>
    </div>
  );
}

export default withPageWrapper(AboutPage);
