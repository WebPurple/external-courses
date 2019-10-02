function showType(retArr) {
  if (typeof retArr === 'string') {
    console.log('Тип переменной: String');
    return 'string'; // String return func
  } else if (typeof retArr === 'number') {
    console.log('Тип переменной: Number');
    return 'number'; //Number return to end func
  }
  console.log('Undefined');
  return undefined;

}
module.exports = showType;