function MaxValue(i, j) {
  return i - j;
}
const Mass = [5, 7, 20, 4, 2, 14, 11];
MaxValue(Mass);
console.log(Mass.sort(MaxValue));
const Last = Mass[Mass.length - 1];
console.log('Максимальное значение в массиве положительных чисел:', Last);
