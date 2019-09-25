function maxArrayElement(argument) {
    let maxElement=0;
    let count=0;
    while (count<argument.length) {
        if (argument[count] > maxElement) maxElement = argument[count];
    count++;
    }
    return (maxElement);
}
module.exports = maxArrayElement;