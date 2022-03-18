function upWord(str) {
  const newStr = str.split(' ').map((e) => e[0].toUpperCase() + e.slice(1));

  return newStr.join(' ');
}

module.export = upWord;
