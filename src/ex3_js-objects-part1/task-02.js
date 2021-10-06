function returnObject(obj) {
  for (key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  return;
}

module.exports = returnObject;
