function addSubStrToStr(str, substr, num) {
  const arrStr = str.split(" ");
  
  arrStr[num] += " " + substr;

  return arrStr.join(" ");
}

module.exports = addSubStrToStr;
