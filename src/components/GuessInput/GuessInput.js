import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();

      console.log({ answer: `${guess}` });

      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        pattern="[A-Za-z]{5}"
        title="5 letters only"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
