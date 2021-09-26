function MegaFunc(Enumeration) {
  let SumZero = 0;
  let SumEven = 0;
  let SumOdd = 0;
  for (let i = 0; i < Enumeration.length; i += 1) {
    // Определение колличества нулей
    if (Enumeration[i] === 0) {
      SumZero += 1;
    }
    // Определение колличества чётных элементов
    if (Enumeration[i] % 2 === 0) {
      SumEven += 1;
    }
    // Определение колличества нечётных элементов
    if (Enumeration[i] % 2 !== 0) {
      SumOdd += 1;
    }
  }
  console.log('Колличество чётных элементов:', SumEven);
  console.log('Колличество нечётных элементов в массиве:', SumOdd);
  console.log('Колличество нулей в массиве:', SumZero);
  const GeneralMass = [SumEven, SumOdd, SumZero];
  console.log(GeneralMass);
}
const gass = [null, 1, 2, 3, 4, 5, 0, ('*'), 0];
MegaFunc(gass);
