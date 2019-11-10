import React from "react";
import { NavLink } from "react-router-dom";

import "./TopLinks.css";
import routePaths from "./routePaths";

function renderLinksArray(linksInfo: Array<any>, isHome: Boolean) {
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

interface Props {
  isHome: Boolean;
}

const TopLinks: React.FunctionComponent<Props> = props => {
  const linksInfo = [
    { path: routePaths.MAIN, label: "Home", hideOnHome: true },
    { path: routePaths.ABOUT_RADP, label: "Rainy April Day Productions" },
    { path: routePaths.FILMMAKERS, label: "Filmmakers" },
    { path: routePaths.SYNOPSIS, label: "Synopsis" },
    // { path: routePaths.DONATE, label: "Donate" },
    { path: routePaths.CONTACT, label: "Contact" }
  ];

  const className: string = ["top-links", props.isHome && "home-top-links"].filter(name => name).join(" ");

  return <div className={className}>{renderLinksArray(linksInfo, props.isHome)}</div>;
};

TopLinks.defaultProps = {
  isHome: false
};

export default TopLinks;
