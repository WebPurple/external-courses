function keysAndValues(obj) {
  const keysArray = Object.keys(obj);
  const keysValues = Object.values(obj);

  for (let i = 0; i < keysArray.length; i += 1) {
    console.log(keysArray[i] + keysValues[i]);
  }

  return undefined;
}

module.exports = keysAndValues;
