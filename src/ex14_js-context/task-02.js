function Hangman(word) {
    this.hiddenWord = word.split("");
    this.guessedWord = [];
    this.invalidLetters = [];
    this.numErrors = 6;

    this.guessedWord = this.hiddenWord.map(elem => elem = "_");

    this.getWrongSymbols = () => {
        return this.invalidLetters;
    }

    this.getGuessedString = () => {
        return this.guessedWord.join('');
    }

    this.getErrorsLeft = () => {
        return this.numErrors;
    }

    this.getStatus =  () => {
        return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
    }

    this.startAgain = (newWord) => {
        this.hiddenWord = newWord.split("");
        this.guessedWord = [];
        this.invalidLetters = [];
        this.numErrors = 6;
        
        for (let elem of this.hiddenWord) {
            this.guessedWord.push("_");
        }
        
        return this;
    }

    this.guess = (letter) => {
        if (this.hiddenWord.includes(letter)) {
            this.hiddenWord.forEach((elem, index) => {
                if (letter === elem) {
                    this.guessedWord[index] = elem;               
                }  
            });
        
            if (this.getGuessedString() !== word) {
                console.log(this.getGuessedString());
            }

            if (this.getGuessedString() === word) {
                console.log(`${this.getGuessedString()} | You won!`);
            }

            return this;
        }

        if (!this.hiddenWord.includes(letter)) {
            if (this.numErrors > 0) {
                this.numErrors -= 1;
                this.invalidLetters.push(letter);
                console.log(`wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols()}`);
            }

            if (this.numErrors <= 0) {
                console.log('There are no more moves, you have lost! Start the game again.');
            }

            return this;
        }
    }
}

let hangman = new Hangman();

module.exports =  hangman;
