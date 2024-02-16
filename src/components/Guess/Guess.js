import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell( {letter, status} ) {
  const className = status ? `cell ${status}` : 'cell';
  return(
    <span className={className}>{letter ?? ''}</span>
  )
}

function Guess({ word, answer }) {
  const checkedGuess = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return(
          <Cell key={num} letter={word ? checkedGuess[num].letter : undefined} status={word ? checkedGuess[num].status : undefined}></Cell>
        );
      })}
    </p>
  );
}

export default Guess;