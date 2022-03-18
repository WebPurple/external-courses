function pastWord(str, word, num) {
  const arr = str.split(' ');
  arr.splice(num + 1, 0, word);

  return arr.join(' ');
}

module.export = pastWord;
