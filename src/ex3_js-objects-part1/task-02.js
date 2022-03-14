function showValues(object) {
  for (let key in object) {
    console.log(key, object[key]);
  }
  return;
}

module.exports = showValues();
