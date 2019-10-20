import React from "react";

import TopLinks from "./TopLinks";
import "./standardPage.css";

function withPageWrapper(WrappedComponent) {
  return function(props) {
    return (
      <>
        <TopLinks />
        <div className="standard-page">
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
}

export default withPageWrapper;
