import React from 'react';

import './Synopsis.css';
import withPageWrapper from './withPageWrapper';

function Synopsis() {
  return (
    <div>
      <h1 className="synopsis-title accent-text">
        Synopsis of the film <span className="title">Tipsy</span>
      </h1>
      <p>
        High school teacher Shawna is young, carefree, and fun. She likes to go out and party on the weekends with her
        friends and hookup with men in a drunken haze of one-night stands. When she gets a threatening note to not say
        no to a former lover intent on having her to himself, she dismisses it as a prank by one of her students. But
        soon the threats intensify and strike closer to home. The clock is ticking for Shawna learn her stalkers
        identity before it’s too late.
      </p>
    </div>
  );
}

export default withPageWrapper(Synopsis);
