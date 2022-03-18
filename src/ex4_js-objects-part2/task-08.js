function camelCase(str) {
  let newStr = str.split(' ').map((e) => (e[0].toUpperCase() + e.slice(1)));
  newStr = newStr.join('');

  return newStr[0].toLowerCase() + newStr.slice(1);
}

module.export = camelCase;
