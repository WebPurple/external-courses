function checkNaturalNumber(number) {
  number = +prompt("Enter a number up to 1000");
  if (number >= 1000) {
    return console.log("The data is not correct");
  }
  if (number == 0 || number == 1) {
    return console.log("It is not considered either simple or composite");
  }
  if (number % 2 != 0 && number % 3 != 0) {
    return console.log("A prime number");
  }
  return console.log("A composite number");
}
module.exports = checkNaturalNumber;
