const camelCase = (str) => {
  let newStr = '';
  const worldArray = str.split(' ');

  worldArray.forEach((item, index) => {
    worldArray[index] = item.toLowerCase();
  });

  worldArray.forEach((item, index) => {
    worldArray[index] = item[0].toUpperCase() + item.slice(1);
    newStr += worldArray[index];
  });
  newStr = newStr[0].toLowerCase() + newStr.substring(1);

  return newStr;
};

module.exports = camelCase;
