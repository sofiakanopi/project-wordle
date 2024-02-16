import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function GameOverBanner({ answer, number, gameStatus }) {
  if (gameStatus === 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{number} guesses</strong>.
        </p>
      </div>
    )
  } else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
}

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
      {(gameStatus !== 'running') ? <GameOverBanner answer={answer} number={guesses.length} gameStatus={gameStatus}></GameOverBanner> : undefined}
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus}></GuessInput>
    </>
  );
}

export default Game;
