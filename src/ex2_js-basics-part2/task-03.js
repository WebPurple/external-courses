function checkEvenArray(array) {
  let [evenNum, oddNum, zeroNum] = [0, 0, 0];

  for (let elem of array) {
    if (!(typeof elem === "string")) {
      if (elem === 0) zeroNum++;
      if (elem % 2 === 0 && elem !== 0 && elem !== null) evenNum++;
      if (elem % 2 === 1) oddNum++;
    }
  }

  return [evenNum, oddNum, zeroNum];
}

module.exports = checkEvenArray;
