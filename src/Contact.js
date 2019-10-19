import React from "react";

import "./Contact.css";
import TopLinks from "./TopLinks";

function Contact() {
  return (
    <>
      <TopLinks />
      <div className="contact-page">
        <h1>Contact</h1>
        Rainy April Day Productions
        <br />
        PO Box 26602
        <br />
        Gwynn Oak, MD 21207
        <br />
        <a href="mailto:aprild@rainyaprilday.com">AprilD@rainyaprilday.com</a>
        <br />
      </div>
    </>
  );
}

export default Contact;
