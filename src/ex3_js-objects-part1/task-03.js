module.exports = checkProperty;

function checkProperty(property, object){
    for(let key in object){
        if(object.hasOwnProperty(key)){
            if( property === key){
                return true;
            };
        } 
    };
    return false;
}