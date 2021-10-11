function outputObject(exampleObject) {
  const entries = Object.entries(exampleObject);
  entries.forEach((key, value) => {
    console.log(key, value);
  });
  return undefined;
}

module.exports = outputObject;
