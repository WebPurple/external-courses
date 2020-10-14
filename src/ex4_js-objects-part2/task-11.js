function countString(myString) {
  new Set(myString).forEach(element => console.log(element));
}

module.exports = countString;
