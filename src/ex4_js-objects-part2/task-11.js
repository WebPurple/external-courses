function howWord(str) {
  const arr = str.toLowerCase().split('');

  const obj = {};

  arr.forEach((e) => {
    if (obj[e] === undefined) {
      obj[e] = 0;
    }

    if (obj.hasOwnProperty(e)) {
      obj[e] += 1;
    }
  });

  return obj;
}

module.export = howWord;
