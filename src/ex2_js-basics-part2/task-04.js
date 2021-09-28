//task-04
let f = function(arr){
    let count = 0;
    for (let i = 0; i < (arr.length-1); i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr [j]){
                count++
            }          
        }
    }
    if (count > 0){
        console.log(true);
    } else {
        console.log(false);
    }
}
f([78, 25, 22, 25, 4, 145, 6, 23]);
Module.exports = f;