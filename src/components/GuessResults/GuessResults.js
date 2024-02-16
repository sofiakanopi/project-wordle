import React from 'react';
import Guess from '../Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Banner({type, reveal}) {
  const bannerClass = `banner ${type}`;
  const bannerMessage = (type === 'sad') ? `Sorry, the correct answer is <strong>${reveal}</strong>.` : `<strong>Congratulations!</strong> Got it in<strong>${reveal} guesses</strong>.`;

  return (
    <div className={bannerClass}>
      <p>{bannerMessage}</p>
    </div>
  )
}

function GuessResults({ guesses, answer }) {
  const [win, setWin] = React.useState(0);

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <Guess key={num} word={guesses[num]} answer={answer} win={win} setWin={setWin}></Guess>
        )
      })}
    </div>
  );
}

export default GuessResults;
