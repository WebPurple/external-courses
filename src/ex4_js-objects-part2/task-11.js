const itemCounter = (str) => {
  const arrayWorld = str.split('');
  const repeatObj = {};

  arrayWorld.forEach((item) => {
    let n = 0;
    const corectItem = item;

    arrayWorld.forEach(() => {
      if (corectItem === item) {
        n += 1;
        repeatObj[item] = n;
      }
    });
  });

  Object.keys(repeatObj).forEach((key) => {
    console.log(`${repeatObj[key]} : ${repeatObj.value}`);
  });

  return undefined;
};

module.exports = itemCounter;
