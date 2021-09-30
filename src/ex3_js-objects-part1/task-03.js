object = {
  name: "anna",
  age: "13",
  adress: "ryazan"
};
function checkProperty(str, obj) {
  if (str in obj) {
    return true;
  }
  return false;
}
module.exports = checkProperty;