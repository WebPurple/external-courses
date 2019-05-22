function Hangman(initWord) {
    this.startAgain = function (initWord) {
        word = typeof initWord === "string" ? initWord : "";
        guessedWord = [];
        uncorrectLetter = [];
        errorLimit = 6;
        for (var i = 0; i < word.length; i++) {
            guessedWord[i] = "_";
        }
    }

    var word;
    var guessedWord;
    var uncorrectLetter;
    var errorLimit;
    this.startAgain(initWord);

    this.vivod = function vivod() {
        console.log(word);
        console.log(guessedWord);
    }
    this.guess = function (letter) {
        if (this.getErrorsLeft() > 0) {
            var currentTry = false;
            var guessed = true;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    guessedWord[i] = letter;
                    currentTry = true;
                }
                if (guessedWord[i] === "_") {
                    guessed = false;
                }
            }
            if (currentTry) {
                var result = guessedWord.join("");
                if (guessed) {
                    result = `${result} | You Won!`
                }
                console.log(result);

            } else {
                errorLimit -= 1;
                uncorrectLetter.push(letter);
                if (this.getErrorsLeft() > 0) {
                    console.log(`wrong letter, errors left ${errorLimit} | ${uncorrectLetter.toString()}`);
                } else {
                    console.log(`You lost!, errors left ${errorLimit} | ${uncorrectLetter.toString()}`);
                }
            }
        } else {
            console.log("Game over!");
        }
        return this;
    }
    this.getGuessedString = function () {
        return guessedWord.join("");
    }
    this.getErrorsLeft = function () {
        return errorLimit;
    }
    this.getWrongSymbols = function () {
        return uncorrectLetter;
    }
    this.getStatus = function () {
        return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
    }

}

module.exports = new Hangman();