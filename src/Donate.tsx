import React from 'react';

import './Donate.css';
import withPageWrapper from './withPageWrapper';
import officersPicture from './assets/officers-shot.png';
import superagent from 'superagent';
import constants from './utils/constants';
const {NBSP} = constants;

const SELECT_AMOUNT_ID = 'select-amount';
const ERROR_ID = 'error-message';

const openPageToSquareUrl = (amount, event): Function => {
  const newWindow = window.open('square-loading');
  event.preventDefault();

  return superagent.post(`http://rainyaprildaylocal/square.php?amount=${amount}`).end((err: object, res: object) => {
    if (err) {
      this.setState({postError: err});
    }

    newWindow.location.replace(res.text);
  });
};

class Donate extends React.Component {
  state = {otherAmount: '', errorMessage: ''};

  validateOtherAmount(value: string): void {
    const validDollarAmount = /^(\d+)?(\.(\d{2})?)?$/;

    if (!value.match(validDollarAmount)) {
      this.setState({errorMessage: 'Other amount must be a valid dollar amount.'});
      return;
    }

    if (value && Number(value) < 5) {
      this.setState({errorMessage: 'Other amount must be at least $5'});
      return;
    }

    this.setState({errorMessage: ''});
    return;
  }

  onOtherAmountClick(event): void {
    const {otherAmount, errorMessage} = this.state;

    if (errorMessage) {
      alert(errorMessage);
    } else if (!otherAmount) {
      alert('No amount was entered');
    } else {
      openPageToSquareUrl(otherAmount, event);
    }
  }

  renderOtherAmount(): object {
    const {errorMessage, otherAmount} = this.state;
    const hasError = Boolean(errorMessage);
    const labelledBy = [SELECT_AMOUNT_ID, hasError && ERROR_ID].filter(id => id).join(' ');

    const donateAmountForLinkTitle = otherAmount ? `$${otherAmount}` : 'custom amount';

    const linkTitle = `Donate ${donateAmountForLinkTitle}`;

    return (
      <div className="other-amount" key="other">
        <a href="https://squareup.com/" onClick={(event): void => this.onOtherAmountClick(event)} title={linkTitle}>
          $
        </a>
        <input
          aria-invalid={hasError}
          aria-labelledby={labelledBy}
          className={hasError ? 'error-input' : undefined}
          onBlur={(event): void => this.validateOtherAmount(event.target.value)}
          onChange={(event): void => this.setState({otherAmount: event.target.value})}
          placeholder="Other"
          size={8}
          type="text"
          value={otherAmount}
        />
      </div>
    );
  }

  renderSetAmounts(): object {
    const amounts = [50, 100, 250, 500, 1000];

    const renderedSetAmounts = amounts.map((amount): object => {
      const amountString = `$${amount}`;

      return (
        <a
          className="set-amount-link"
          href="https://squareup.com/"
          key={amount}
          onClick={(event): Function => openPageToSquareUrl(amount, event)}
          title={`Donate ${amountString}`}
        >
          {amountString}
        </a>
      );
    });

    renderedSetAmounts.push(this.renderOtherAmount());

    return renderedSetAmounts;
  }

  render(): object {
    const {errorMessage} = this.state;

    return (
      <>
        <img alt="Officers Carr and Holden movie scene" className="movie-picture" src={officersPicture} />
        <p className="donation-message">
          <span className="first-sentence">What am I donating to?</span>
          {NBSP}
          {NBSP}The filmmakers are raising money to film the entire feature film <span className="title">Tipsy</span>.
          Shooting is scheduled to begin early October 2020 and wrap late November 2020. All donations will go toward
          pre-production, production, and post production costs associated with completing the feature film. Remaining
          proceeds will be used to cover entrance fees to various film festivals.
        </p>

        <h2 className="gift-amount-title" id={SELECT_AMOUNT_ID}>
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
