function deleteFirstAndLastSpace(str) {
    const splitStr = str.split('')
  
    if (splitStr[0] === " " && splitStr[splitStr.length-1] === " ") {
      splitStr.pop();
      splitStr.shift();
    }
    
    return splitStr.join("")
  
  }

module.exports = deleteFirstAndLastSpace;
