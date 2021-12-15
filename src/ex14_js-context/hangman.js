class Hangman {
  constructor(word) {
    this.word = word.toLowerCase();
    this.arrWord = this.word.split('');
    this.try = 6;
    this.wrongSymbols = [];
    this.symbolRepeat = 0;
    this.arrAnswer = [];

    this.arrWord.forEach(() => {
      this.arrAnswer.push('_');
    });
  }

  getGuessedString() {
    console.log(this.arrAnswer.join(''));
  }

  getErrorsLeft() {
    console.log(this.try);
  }

  getWrongSymbols() {
    console.log(this.wrongSymbols.join(', '));
  }

  getStatus() {
    console.log(`${this.arrAnswer.join('')}  | errors left ${this.try}`);
  }

  startAgain(newWord) {
    this.word = newWord.toLowerCase();
    this.arrWord = this.word.split('');
    this.try = 6;
    this.wrongSymbols = [];
    this.symbolRepeat = 0;
    this.arrAnswer = [];

    this.arrWord.forEach(() => {
      this.arrAnswer.push('_');
    });

    return this;
  }

  guess(a) {
    if (a.length === 1 || typeof a === 'string') {
      this.arrWord.forEach((item, i) => {
        if (a === item) {
          this.arrAnswer[i] = a;
          this.symbolRepeat += 1;
        }
      });

      if (this.symbolRepeat === 0) {
        this.try -= 1;
        this.wrongSymbols.push(a);
        console.log(`wrong letter, errors left ${this.try} | ${this.wrongSymbols.join(', ')}`);
      } else {
        console.log(this.arrAnswer.join(''));
      }

      if (this.try === 0) {
        console.log(`You lost. Word: ${this.word}`);
      } else if (this.arrAnswer.join('') === this.word) {
        console.log('You win!!!');
      }
    }

    return this;
  }
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
