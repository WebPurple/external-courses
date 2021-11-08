function countLetter(str) {
  const result = {};
  const index = str.split('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < index.length; i++) {
    const count = result[index[i]] ? result[index[i]] : 0;
    result[index[i]] = count + 1;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in result) {
    if ({}.hasOwnProperty.call(result, key)) {
      console.log(key, result[key]);
    }
  }
}

module.exports = countLetter;
