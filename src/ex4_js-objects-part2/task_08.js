"use strict"; 

    function myFunction(string){
        var camel = false;
        var str = string;
        var camelString = '';
      
        for(var i = 0; i < str.length; i++){
          if(str.charAt(i) === ' '){
            camel = true;
      
          } else if(camel) {
            camelString += str.charAt(i).toUpperCase();
            camel = false;
          } else {
            camelString += str.charAt(i);
          }
        } 
        return camelString;
    }

module.exports = myFunction;