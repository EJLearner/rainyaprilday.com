import React from "react";

import "./Donate.css";
import withPageWrapper from "./withPageWrapper";
import officersPicture from "./assets/officers-shot.png";

const SELECT_AMOUNT_ID = "select-amount";
const ERROR_ID = "error-message";

class Donate extends React.Component {
  state = { otherAmount: "" };

  validateOtherAmount(value) {
    const validDollarAmount = /^(\d+)?(\.(\d{2})?)?$/;

    if (!value.match(validDollarAmount)) {
      this.setState({ errorMessage: "Other amount must be a valid dollar amount." });
      return false;
    } else if (value && Number(value) < 5) {
      this.setState({ errorMessage: "Other amount must be at least $5" });
      return false;
    }

    this.setState({ errorMessage: "" });
    return true;
  }

  onOtherAmountClick(event) {
    const { otherAmount, errorMessage } = this.state;

    if (errorMessage) {
      alert(errorMessage);
      event && event.preventDefault();
    }

    if (!otherAmount) {
      alert("No amount was entered");
      event && event.preventDefault();
    }
  }

  renderOtherAmount() {
    const { errorMessage, otherAmount } = this.state;
    const hasError = Boolean(errorMessage);
    const labelledBy = [SELECT_AMOUNT_ID, hasError && ERROR_ID].filter(id => id).join(" ");

    const donateAmountForLinkTitle = otherAmount ? `$${otherAmount}` : "custom amount";

    const linkTitle = `Donate ${donateAmountForLinkTitle}`;

    return (
      <div className="other-amount">
        <a href="" title={linkTitle} onClick={event => this.onOtherAmountClick(event)}>
          $
        </a>
        <input
          aria-invalid={hasError}
          aria-labelledby={labelledBy}
          className={hasError ? "error-input" : undefined}
          onBlur={event => this.validateOtherAmount(event.target.value)}
          onChange={event => this.setState({ otherAmount: event.target.value })}
          type="text"
          placeholder="Other"
          size="8"
          value={otherAmount}
        />
      </div>
    );
  }

  renderSetAmounts() {
    const amounts = [50, 100, 250, 500, 1000];

    const renderedSetAmounts = amounts.map(amount => {
      const amountString = `$${amount}`;

      return (
        <a className="set-amount-link" href="" key={amount} title={`Donate ${amountString}`}>
          {amountString}
        </a>
      );
    });

    renderedSetAmounts.push(this.renderOtherAmount());

    return renderedSetAmounts;
  }

  render() {
    const { errorMessage } = this.state;

    return (
      <>
        <img alt="Officers Carr and Holden movie scene" className="movie-picture" src={officersPicture} />
        <p className="donation-message">
          <span className="first-sentence">What am I donating to?</span> The filmmakers are raising money to film the
          entire feature film <span className="title">Tipsy</span>. Shooting is scheduled to begin early October 2020
          and wrap late November 2020. All donations will go toward pre-production, production, and post production
          costs associated with completing the feature film. Remaining proceeds will be used to cover entrance fees to
          various film festivals.
        </p>

        <h2 id={SELECT_AMOUNT_ID} className="gift-amount-title">
          Select your gift amount:
        </h2>
        {errorMessage && (
          <div id={ERROR_ID} role="alert">
            {errorMessage}
          </div>
        )}
        <div className="gift-amount-choices">{this.renderSetAmounts()}</div>
      </>
    );
  }
}

export default withPageWrapper(Donate);
