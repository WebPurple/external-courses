function seeKeys(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  console.log(keys, values);
  return `Ключи: ${keys}, значения свойств: ${values}`;
}

module.exports = seeKeys;
