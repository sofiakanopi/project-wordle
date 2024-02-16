import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuesses(tentativeGuess) {
    const updatedGuesses = [...guesses, tentativeGuess];
    setGuesses(updatedGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus === 'won' && <WonBanner number={guesses.length}></WonBanner>}
      {gameStatus === 'lost' && <LostBanner answer={answer}></LostBanner>}
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus}></GuessInput>
    </>
  );
}

export default Game;
