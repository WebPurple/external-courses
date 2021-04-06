function calculator() {
    let result = 0;
    
    return {
        add(number) {
            if (typeof(number) == "undefined") {
                return this.add; 
            }
            
            result = result + number; 
            return this.add;
        },
        subtract(number) {
            if (typeof(number) == "undefined") {
                return this.subtract; 
            }
            
            result = result - number;
            
            return this.subtract;
        },
        divide(number) {
            if (typeof(number) == "undefined") {
                return this.divide; 
            }
            
            result = result / number;
            
            return this.divide;
        },
        multiply(number) {
            if (typeof(number) == "undefined") {
                return this.multiply; 
            }
        
            result = result * number;
        
            return this.multiply;
        },
        getResult(){
            return result;
        },
        reset() {
            result = 0;
        }
    }
};

let testCalculator = calculator();
module.exports = testCalculator;
