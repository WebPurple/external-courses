function numberOfEachCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (!obj.hasOwnProperty(str[i])) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] += 1;
      }
    } else {
      continue;
    }
  }

  for (let key in obj) {
    console.log(`${key}:${obj[key]}`);
  }
}

module.exports = numberOfEachCharacter;
