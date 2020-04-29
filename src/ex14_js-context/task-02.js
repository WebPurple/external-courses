class Hangman {
    constructor(word) {
        this.startAgain(word);
    }
    guess(char) {
        if (this.word.indexOf(char) !== -1) {
            this.success(char)
        } else {
            this.fail(char)
        }
        return this;
    }
    success(char) {
        for (let i = 0; i < this.word.length; i++) {
            if (char === this.word[i]) {
                this.guessedString = this.guessedString.substring(0, i) + char + this.guessedString.substring(i + 1);
            }
        }
        if (this.guessedString.indexOf('_') === -1) {
            console.log(`${this.guessedString} | You win!`)
        } else {
            console.log(this.guessedString)
        }
    }
    fail(char) {
        this.errorCount++;
        this.wrongSymbols.push(char)

        if (this.errorCount >= 6) {
            console.log(`${this.guessedString} | errors left ${6 - this.errorCount} | Fail!`);
        } else{
            console.log(`wrong letter | errors left ${6 - this.errorCount} | ${this.wrongSymbols.toString()}`);
        }
    }
    getStatus() {
        console.log(`${this.guessedString} | errors left ${6 - this.errorCount}`)
    }
    getGuessedString(){
        return this.guessedString;
    }
    getErrorsLeft(){
        return 6-this.errorCount;
    }
    getWrongSymbols(){
        return this.wrongSymbols;
    }
    startAgain(word){
        this.word = word.toLowerCase();
        this.guessedString = '_'.repeat(word.length);
        this.errorCount = 0;
        this.wrongSymbols = [];  
        return this;
    }
}
module.exports = new Hangman();