import React from "react";

import "./Donate.css";
import withPageWrapper from "./withPageWrapper";
import officersPicture from "./assets/officers-shot.png";

function renderSetAmounts() {
  const amounts = [50, 100, 250, 500, 1000];

  const renderedSetAmounts = amounts.map(amount => {
    return (
      <a className="set-amount-link" href="" key={amount}>
        ${amount}
      </a>
    );
  });

  const otherAmount = (
    <div className="other-amount">
      <a href="">$</a>
      <input type="text" placeholder="Other" size="8" />
    </div>
  );

  renderedSetAmounts.push(otherAmount);

  return renderedSetAmounts;
}

function Donate() {
  return (
    <>
      <img alt="Officers Carr and Holden movie scene" className="movie-picture" src={officersPicture} />
      <p>
        <span className="first-sentence">What am I donating to?</span> The filmmakers are raising money to film the
        entire feature film <span className="title">Tipsy</span>. Shooting is scheduled to begin early October 2020 and
        wrap late November 2020. All donations will go toward pre-production, production, and post production costs
        associated with completing the feature film. Remaining proceeds will be used to cover entrance fees to various
        film festivals.
      </p>

      <h2 className="gift-amount-title">Select your gift amount:</h2>
      <div className="gift-amount-choices">{renderSetAmounts()}</div>
    </>
  );
}

export default withPageWrapper(Donate);
