module.exports = function numberUnder1000SimpleOrComplex (myNumber) {
  if (myNumber > 1000) return 'Данные неверны';

  switch (myNumber) {
    case 0:
      return '0 не натуральное число';
    case 1:
      return '1 не составное и не простое число';
    default:
      break;
  }
  
  for(let i = 2; i < myNumber; i++) {
    if (myNumber % i === 0) {
      return 'Число ' + myNumber + ' - составное число';
    }
  }
    
  return 'Число ' + myNumber + ' - простое число';
}
