const characterСounter = (string) => {
  const strArray = string.split('');

  const result = {};

  for (let i = 0; i < strArray.length; i += 1) {
    if (result[strArray[i]]) {
      result[strArray[i]] += 1;
    } else {
      result[strArray[i]] = 1;
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in result) {
    console.log(`${key}:${result[key]}`);
  }

  return undefined;
};

module.exports = characterСounter;
