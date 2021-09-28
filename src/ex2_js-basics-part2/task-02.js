//task-02
let actionsArray = function(){
    let array = [12, 25, 46, 89];
    let count = 0;
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
        count += 1;
    }
    console.log(count);
    return undefined;
}
 actionsArray();
 
 Module.exports = actionsArray;