function checking(array) {
    let x = 0;
    let isSameNumber = false;
    for (let i = 1; i < array.length; i++){
        if (array[x] === array[i]){
            console.log(array[i]);
            isSameNumber = true;
            break;
        }
        else if (i === array.length -1){
            x++;
            i = x;
        }
    }
    return isSameNumber;
}
module.exports = checking;