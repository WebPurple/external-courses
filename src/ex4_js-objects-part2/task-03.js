function deleteSpace(str) {
  const array = str.split('');

  if (array[0] === " " && array[array.length - 1] === " ") {
    array.shift();
    array.pop();
  }

  return array.join('');
}

module.exports = deleteSpace;
