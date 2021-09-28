//task-05
let valueMax = 0;
let f = function(array){
    let arr = [45, 57, 638, 4282, 78, 5, 652785, 72];
    for (let i = 1 ; i < arr.length ; i++){
        if (arr[i]>valueMax) {
            valueMax = arr[i];
        }
    }
    console.log(valueMax);
}    
f();
return undefined;

Module.exports = f;