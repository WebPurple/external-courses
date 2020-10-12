function countLetters(str) {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let key in obj) console.log(`${key} : ${obj[key]}`);

  return;
}

module.exports = countLetters;
