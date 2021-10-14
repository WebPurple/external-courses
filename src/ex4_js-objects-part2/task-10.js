const mirrorStr = (str) => {
  let arrayWorld = str.split('');
  let newStr = '';

  arrayWorld = arrayWorld.reverse();
  arrayWorld.forEach((item, index) => {
    newStr += arrayWorld[index];
  });

  return newStr;
};

module.exports = mirrorStr;
