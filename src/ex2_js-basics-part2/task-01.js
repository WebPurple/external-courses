function checkStringOrNumber(argument) {
    if (typeof argument === "string") {
        return "string";
    }
    else {// eslint-disable-line no-else-return
        if (typeof argument === "number") {
            return "number";
        }
        else {// eslint-disable-line no-else-return
            return undefined
        }
    }
}
module.exports = checkStringOrNumber;