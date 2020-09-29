function calcArray(arr) {
     let sumEven = 0;
     let sumOdd = 0;
     let sumZero = 0;

     for (let index = 0; index < arr.length; index++) {
          if (arr[index] % 2 === 0 && arr[index] !== 0 && arr[index] !== null) {
               sumEven = ++sumEven;
          }

          if (arr[index] % 2 !== 0) {
               sumOdd = ++sumOdd;
          }
          
          if (arr[index] === 0) {
               sumZero = ++sumZero;
          }
     }

     return [sumEven, sumOdd, sumZero];
};
module.exports = calcArray;
