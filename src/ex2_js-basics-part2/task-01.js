//task-01
let f = function(str){
    if (String(str) === "NaN"){
        console.log("type =", undefined, ", value =", str);
    } else {
      console.log("type =", typeof str, ", value =", str);
    }
    return str;
}
f(23);
Module.exports = f;