const objectParameters = (object) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${key}: ${object[key]}`);
    }
  }

  return undefined;
};

module.exports = objectParameters;
