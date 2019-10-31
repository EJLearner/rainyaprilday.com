import React from "react";

import TopLinks from "./TopLinks";
import rainyAprilDayLogo from "./assets/rainy-april-day-logo.png";
import "./standardPage.css";

function withPageWrapper(WrappedComponent) {
  return function(props) {
    return (
      <>
        <TopLinks />
        <div className="standard-page">
          <img alt="Site Logo" className="site-logo" src={rainyAprilDayLogo} />
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
}

export default withPageWrapper;
