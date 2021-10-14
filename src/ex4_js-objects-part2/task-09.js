const upgradeStr = (str1, str2, position) => {
  let grandStr = '';
  const arrayWorld = str1.split(' ');

  for (let i = 0; i < position + 1; i += 1) {
    grandStr += arrayWorld[i] + [' '];
  }
  grandStr += str2 + [' '];
  for (let i = position + 1; i < arrayWorld.length; i += 1) {
    grandStr += arrayWorld[i] + [' '];
  }
  grandStr = grandStr.slice(0, -1);

  return grandStr;
};

module.exports = upgradeStr;
