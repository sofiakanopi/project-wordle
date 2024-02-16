import React from 'react';

function GuessInput({ handleGuesses }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();

      handleGuesses(tentativeGuess);

      setTentativeGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        pattern="[A-Za-z]{5}"
        title="5 letters only"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
