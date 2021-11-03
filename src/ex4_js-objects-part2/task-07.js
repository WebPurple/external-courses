function cutString(str, num) {
  let string = str;
  if (string.length > num) {
    string = string.slice(0, num - 1);
    string += '…';
  }
  return string;
}

module.exports = cutString;
