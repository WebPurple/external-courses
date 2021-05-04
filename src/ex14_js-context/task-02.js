function Hangman(word) {
    this.hiddenWord = word.split("");
    this.guessedWord = [];
    this.invalidLetters = [];
    this.numErrors = 6;

    for (let elem of this.hiddenWord) {
        this.guessedWord.push("_");
    }

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
        if (this.hiddenWord.indexOf(letter) !== -1) {
            this.hiddenWord.forEach(elem => {
                if (letter === elem) {
                    this.guessedWord[this.hiddenWord.indexOf(elem)] = elem;               
                }  
            });
        
            if (this.getGuessedString() !== word) {
                console.log(`${this.getGuessedString()}`);
            }

            if (this.getGuessedString() === word) {
                console.log(`${this.getGuessedString()} | You won!`);
            }

            return this;
        }

        if (this.hiddenWord.indexOf(letter) === -1) {
            this.numErrors--;
            this.invalidLetters.push(letter);
            console.log(`wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols()}`);

            return this;
        }
    }
}

let hangman = new Hangman();

module.exports =  hangman;
