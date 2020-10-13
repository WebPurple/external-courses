function createlowerCamelCase(str) {
  const array = str.toLowerCase().split(" ");

  for (let i = 1; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }

  return array.join("");
}

module.exports = createlowerCamelCase;
