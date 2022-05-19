function Hangman(word) {
  // new variables
  let resultWord = word.toLowerCase().split('');
  let wrongSymbols = [];
  let guessString = [];
  let maxErrors = 6;
  let lengthResult = resultWord.length;
  for (let i = 0; i < lengthResult; i++) {
    guessString[i] = '_';
  }
  // return constructor object
  return {
    //     guess
    guess(symbol) {
      if (maxErrors > 1) {
        if (resultWord.some((i) => i === symbol.toLowerCase())) {
          for (let i = 0; i < lengthResult; i++) {
            if (resultWord[i] === symbol.toLowerCase()) {
              guessString[i] = symbol.toLowerCase();
            }
          }
          if (resultWord.join('') === guessString.join('')) {
            console.log(`${this.getGuessedString()} | You won!`);
            this.startAgain('webpurple');
            return this;
          }
          console.log(`${this.getGuessedString()}`);
        } else {
          for (let i = 0; i < lengthResult; i++) {
            if (symbol.toLowerCase() === wrongSymbols[i]) {
              console.log('You input this letter!');
              return this;
            }
          }
          wrongSymbols.push(symbol.toLowerCase());
          maxErrors--;
          console.log(
            `Wrong letter, errors left ${maxErrors} | ${this.getWrongSymbols().join(
              ',',
            )}`,
          );
          return this;
        }
      } else {
        console.log('You lose :( Try again! -> .startAgain("webpurple")');
        return this;
      }
      return this;
    },
    // getGuessedString
    getGuessedString() {
      return guessString.join('');
    },
    // getErrorsLeftgetErrorsLeft
    getErrorsLeft() {
      return maxErrors;
    },
    // getWrongSymbols
    getWrongSymbols() {
      return wrongSymbols;
    },
    // getStatus
    getStatus() {
      return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
    },
    // startAgain
    startAgain(newWord) {
      resultWord = newWord.toLowerCase().split('');
      maxErrors = 6;
      lengthResult = resultWord.length;
      wrongSymbols = [];
      guessString = [];
      for (let i = 0; i < lengthResult; i++) {
        guessString[i] = '_';
      }
      return this;
    },
  };
}

const hangman = new Hangman('webpurple');
module.exports = hangman;
