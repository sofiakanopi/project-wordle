import React from 'react';
import Banner from '../Banner';

function WonBanner({number}) {
  return (
    <Banner status="happy">
      <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>{(number === 1) ? '1 guess' : `${number} guesses` }</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
