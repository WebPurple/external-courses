function searchStr(str) {
  const strArray = str.split(" ");
  const array = [];

  for (let elem of strArray) {
    array.push(elem[0].toUpperCase() + elem.slice(1))
  }

  return array.join(' ');
}

module.exports = searchStr;
