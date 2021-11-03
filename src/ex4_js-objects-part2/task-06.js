function changeString(str) {
  const arrOfStrings = str.split(' ');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrOfStrings.length; i++) {
    arrOfStrings[i] = arrOfStrings[i].charAt(0).toUpperCase() + arrOfStrings[i].slice(1);
  }
  return arrOfStrings.join(' ');
}

module.exports = changeString;
