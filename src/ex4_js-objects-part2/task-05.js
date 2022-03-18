function findStr(longStr, str) {
  longStr.split(' ').find((e) => e === str);
  return false;
}

module.export = findStr;
