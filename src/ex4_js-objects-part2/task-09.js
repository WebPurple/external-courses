function pastWord(str, word, num) {
  console.log(str.split(' ').splice(num + 1, 0, word));
}

module.export = pastWord;
