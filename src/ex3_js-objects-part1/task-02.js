function printObjectCase(object) {
  Object.keys(object).forEach((key) => console.log(`${key} ${object[key]}`));

  return undefined;
}

module.exports = printObjectCase;
