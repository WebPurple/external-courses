function outputKeysValues(obj) {
  for (k in obj) {
    console.log(`${k} : ${obj[k]}`);
  }
  return;
}
let object = {
  a: "12",
  b: "13",
};
module.exports = outputKeysValues;
