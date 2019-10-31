import React from "react";

import "./Contact.css";
import withPageWrapper from "./withPageWrapper";

function Contact() {
  let instagramInfo;
  let facebookInfo;

  return (
    <div className="contact-page">
      <h1 className="accent-text">Contact</h1>
      Rainy April Day Productions
      <br />
      PO Box 26602
      <br />
      Gwynn Oak, MD 21207
      <br />
      {instagramInfo && (
        <>
          Instagram: ********
          <br />
        </>
      )}
      {facebookInfo && (
        <>
          Facebook: ********
          <br />
        </>
      )}
      <a href="mailto:aprild@rainyaprilday.com">aprild@rainyaprilday.com</a>
      <br />
    </div>
  );
}

export default withPageWrapper(Contact);
