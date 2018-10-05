function dataType(a) {
    
    if ( typeof a === 'string' ) {
        
        return "string";

    } else if ( isNaN(a) ) {

        return undefined;

    }  else if ( typeof a === 'number') {

        return "number";
        
    }  else {    
    
    return undefined;

    }
        
} 


console.log(dataType(NaN));
