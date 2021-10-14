const UpperWorld = (str) => {
  const worldArray = str.split(' ');
  let newStr = '';

  worldArray.forEach((item, index) => {
    worldArray[index] = item[0].toUpperCase() + item.slice(1) + [' '];
    newStr += worldArray[index];
  });
  newStr = newStr.slice(0, -1);

  return newStr;
};

module.exports = UpperWorld;
