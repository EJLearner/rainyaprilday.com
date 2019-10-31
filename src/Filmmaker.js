import React from "react";

import "./Filmmaker.css";

function Filmmaker(props) {
  return (
    <div className="name-and-bio">
      <div className="headshot-and-name-column">
        <div className="headshot-and-name">
          <img alt={props.name} src={props.imageSource} />
          <div className="behind-text-mask"></div>
          <div className="filmmaker-name">{props.name}</div>
        </div>
      </div>
      <div className="filmmaker-bio">{props.children}</div>
    </div>
  );
}

export default Filmmaker;
