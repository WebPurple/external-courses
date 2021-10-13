const UpperWorld = (str) => {
  const worldArray = str.split(' ');
  let newStr = '';

  worldArray.forEach((item) => {
    worldArray[item] = item[0].toUpperCase() + item.slice(1) + [' '];
    newStr += worldArray[item];
  });
  newStr = newStr.slice(0, -1);

  return newStr;
};

module.exports = UpperWorld;
