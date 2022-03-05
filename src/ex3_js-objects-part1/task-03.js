// Задние 3
const has = Object.prototype.hasOwnProperty;

function showKey(obj, string) {
  console.log(has.call(obj, string));
}
module.export = showKey();
