function checkEven(e) {
  let [even,notEven,zero]=[0,0,0]
  
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
  
  return [even, notEven, zero]
}

module.exports = checkEven;
