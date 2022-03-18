const getCustomRandomNum = (min, max) => {
  const a = Math.ceil(min);
  const b = Math.floor(max);

  return Math.floor(Math.random() * (b - a + 1) + a);
};

module.exports = getCustomRandomNum;
