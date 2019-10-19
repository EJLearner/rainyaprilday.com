import React from "react";
import { NavLink } from "react-router-dom";

import "./TopLinks.css";
import routePaths from "./routePaths";

function TopLinks() {
  const linksInfo = [
    { path: routePaths.MAIN, label: "Home" },
    { path: routePaths.ABOUT_RADP, label: "About" },
    { path: routePaths.FILMMAKERS, label: "Filmmakers Featurette" },
    { path: routePaths.DONATE, label: "Donate" },
    { path: routePaths.CONTACT, label: "Contact" }
  ];

  return (
    <div className="about-and-other-links">
      {linksInfo.map(({ label, path }) => {
        return (
          <div>
            <NavLink activeClassName="current-page-link" to={path}>
              {label}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default TopLinks;
