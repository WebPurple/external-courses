object = {
  name: "anna",
  age: "13",
  adress: "ryazan"
};
function checkProperty(str, obj) {
  if (!(str in obj)) {
    obj[str] = `'new'`;
    return obj;
  }
}
module.exports = checkProperty;
