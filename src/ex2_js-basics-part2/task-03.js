function checkEven(e) {
  let even = 0;
  let notEven = 0;
  let zero = 0;
  let arr = [];
  e.forEach((element) => {
    if (typeof element === "number") {
      if (element === 0) {
        zero += 1;
      }
      if (element % 2 === 0 && element !== 0) {
        even += 1;
      }
      if (element % 2 !== 0 && element !== 0) {
        notEven += 1;
      }
    } else console.log("В массиве есть не число");
  });
  arr.push(even, notEven, zero);
  return arr;
}

module.exports = checkEven;
