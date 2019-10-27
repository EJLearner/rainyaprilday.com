import React from "react";

import "./Filmmakers.css";

import withPageWrapper from "./withPageWrapper";
import aprilHeadshot from "./assets/april-headshot.jpg";

function Filmmakers() {
  return (
    <>
      <div className="info-and-interviews">
        <div className="filmmakers-info">
          <div className="name-and-bio">
            <div className="headshot-and-name">
              <img alt="April Day" src={aprilHeadshot} />
              <div className="filmmaker-name">April Day</div>
            </div>
            <div className="filmmaker-bio">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, quaerat animi tempore ducimus
              pariatur enim eveniet ab similique soluta quod et aut ipsum nisi placeat, porro odio natus. Maiores,
              accusamus!
            </div>
          </div>
          <div className="name-and-bio">
            <div className="headshot-and-name">
              <img alt="Shola Ajayi" src={aprilHeadshot} />
              <div className="filmmaker-name">Shola Ajayi</div>
            </div>
            <div className="filmmaker-bio">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, quaerat animi tempore ducimus
              pariatur enim eveniet ab similique soluta quod et aut ipsum nisi placeat, porro odio natus. Maiores,
              accusamus!
            </div>
          </div>
          <div className="name-and-bio">
            <div className="headshot-and-name">
              <img alt="Jai Rice" src={aprilHeadshot} />
              <div className="filmmaker-name">Jai Rice</div>
            </div>
            <div className="filmmaker-bio">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, quaerat animi tempore ducimus
              pariatur enim eveniet ab similique soluta quod et aut ipsum nisi placeat, porro odio natus. Maiores,
              accusamus!
            </div>
          </div>
        </div>
        <div className="interviews-link"></div>
      </div>
    </>
  );
}

export default withPageWrapper(Filmmakers);
