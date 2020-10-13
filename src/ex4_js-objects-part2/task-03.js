function deleteSpace(str) {
  const array = str.split("");

  if (array[0] === " ") array.shift();
  if (array[array.length - 1] === " ") array.pop();

  return array.join("");
}

module.exports = deleteSpace;
