const randomMinMax = (min, max) => {
  const Num = Math.random() * (max - min) + min;

  return Num;
};

module.exports = randomMinMax;
