function Hangman(word){
    this.word=word;
    this.mistakes=0;
    this.errorsLeft=6;
    this.newWord=[];
    this.stringOfMistakes="";
    this.arrayOfWord=this.word.split("");
    for(var i=0;i<this.word.length;i++){
    this.newWord[i]="-";
    } 
    
    
    this.guess=function(letter){
    this. indicator=0;
    for(var i=0;i<this.word.length;i++){
    if(this.arrayOfWord[i]===letter){
    this.newWord[i]=letter;
    ++this.indicator;
    }
    }
    if(this.indicator==0){
    this.stringOfMistakes+=letter+",";
    --this.errorsLeft;
    if(this.errorsLeft===0){
    console.log("You lose");
    }
    else{
    console.log("Wrong letter, errors left "+this.errorsLeft+" / "+this.stringOfMistakes.slice(0,-1));
    }
    }
    else{
    console.log(this.newWord.join(""));
    }
    if(this.word==this.newWord.join("")){
    console.log(" You won!")
    }
    return this;
    }
    
    this.getGuessedString=function(){
    console.log(this.newWord.join(""));
    return this;
    }
    
    this.getErrorsLeft=function(){
    console.log(this.errorsLeft);
    return this;
    }
    
    this.getWrongSymbols=function(){ console.log(this.stringOfMistakes.slice(0,-1).split())
    return this;
    }
    
    this.startAgain=function(word){
    this.word=word;
    this.mistakes=0;
    this.errorsLeft=6;
    this.newWord=[];
    this.stringOfMistakes="";
    this.arrayOfWord=this.word.split("");
    for(var i=0;i<this.word.length;i++){
    this.newWord[i]="-";
    }
    return this;
    }
    }
    
    var hangman=new Hangman("hello");
    hangman.guess("h")
    .guess("o")
    .guess("s")
    .guess("e")
    .guess("a")
    .guess("l")
    .guess("r")
    .guess("o")
    .getGuessedString()
    .getErrorsLeft()
    .getWrongSymbols()
    hangman.guess("l")
    .guess("y")
    hangman.startAgain("webpurple")
    hangman.getErrorsLeft()
    hangman.getWrongSymbols()
    hangman.getGuessedString()
    .guess("w")
    hangman.guess("b")
    hangman.guess("p")
    .guess("u")
    hangman.guess("r")
    .guess("l")
    hangman.guess("e")