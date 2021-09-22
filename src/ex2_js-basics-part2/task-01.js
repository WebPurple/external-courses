function checkNumberOrString(variable) {
  if (Number.isNaN(variable)) {
    return console.log("undefined");
  }
  if (typeof variable == "string") {
    return console.log("string");
  }
  if (typeof variable == "number") {
    return console.log("number");
  }
  return console.log("undefined");
}
function g() {}
f(g());

module.exports = checkNumberOrString;
