import React from 'react';

import './AfterDonatePage.css';
import withPageWrapper from './withPageWrapper';
import mainPicture from './assets/main-picture.png';

class AfterDonatePage extends React.Component {
  render(): object {
    return (
      <>
        <h1>You've just contributed to the success of our film!</h1>
        <p className="accent-text thank-you-more-info">
          Please check in on our website and follow us on social media for the latest on our progress
        </p>
        <img alt="Tipsy Scene Shot" className="thank-you-movie-picture" src={mainPicture} />
      </>
    );
  }
}

export default withPageWrapper(AfterDonatePage);
