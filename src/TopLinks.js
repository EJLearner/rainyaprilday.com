import React from "react";
import { NavLink } from "react-router-dom";

import propTypes from "prop-types";

import "./TopLinks.css";
import routePaths from "./routePaths";

function renderLinksArray(linksInfo, isHome) {
  return linksInfo.reduce((linksRender, { hideOnHome, label, path }) => {
    if (!hideOnHome || !isHome) {
      linksRender.push(
        <div className="top-link-div" key={path}>
          <NavLink data-label={label} activeClassName="current-page-link" to={path}>
            {label}
          </NavLink>
        </div>
      );
    }

    return linksRender;
  }, []);
}

function TopLinks(props) {
  const linksInfo = [
    { path: routePaths.MAIN, label: "Home", hideOnHome: true },
    { path: routePaths.ABOUT_RADP, label: "Rainy April Day Productions" },
    { path: routePaths.FILMMAKERS, label: "Filmmakers" },
    { path: routePaths.SYNOPSIS, label: "Synopsis" },
    // { path: routePaths.DONATE, label: "Donate" },
    { path: routePaths.CONTACT, label: "Contact" }
  ];

  const className = ["top-links", props.isHome && "home-top-links"].filter(name => name).join(" ");

  return <div className={className}>{renderLinksArray(linksInfo, props.isHome)}</div>;
}

TopLinks.propTypes = {
  isHome: propTypes.bool
};

TopLinks.defaultProps = {
  isHome: false
};

export default TopLinks;
