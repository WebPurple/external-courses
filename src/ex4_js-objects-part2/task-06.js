function searchStr(str) {
  const result = str.split(" ");

  for (let elem of result) {
    elem = elem[0].toUpperCase() + elem.slice(1);
  }

  return result.join(' ');
}

module.exports = searchStr;
