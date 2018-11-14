var invertStr = function(str=""){
    var result="";
    for (let index = str.length-1; index > -1; index--) {
        result=result+str[index];
    }  
    return result;
}

console.log(invertStr("doom"));