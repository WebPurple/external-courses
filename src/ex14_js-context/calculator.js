
function Calculator(){

    this.state = 0;

    this.add = function add(number){
        this.state += number;
        return this;
    }

    this.subtract = function subtract(number){   
        this.state -= number;
        return this;
    }

    this.divide = function divide(number){
        this.state /= number;
        return this;
    }

    this.multiply = function multiply(number){
        this.state *= number;
        return this;
    }

    this.setState = function (number){
        this.state = number;
    }
    this.getResult = function (){
        return this.state;
    }
    this.reset = function (){
        this.state = 0;
        return this;
    }

    this.fetchData = function(callback){
        this.state = callback();
    }

}


function cb(){
    return 500;
}

let mycalc = new Calculator();

mycalc.setState(3);
console.log(mycalc.add(10).reset().add(5).getResult());
mycalc.fetchData(cb);
console.log(mycalc.getResult());