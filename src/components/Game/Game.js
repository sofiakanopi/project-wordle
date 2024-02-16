import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(tentativeGuess) {
    const latestGuess = {
      id: Math.floor(Math.random() * 900000) + 100000,
      word: tentativeGuess
    };

    const updatedGuesses = [...guesses, latestGuess];
    setGuesses(updatedGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      <GuessInput handleGuesses={handleGuesses}></GuessInput>
    </>
  );
}

export default Game;
