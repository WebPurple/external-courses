//task-06
let f = function (n) {
    if (n < 2) {
      return 'Не причисляется ни к простым, ни к составным числам';
    } 
    if (n > 1000){
        return 'Данные неверные';
    } 
    let i = 2;
    const root = Math.sqrt(n);
    while (i <= root) {
      if (n % i === 0) {
        return 'Составное число';
      }
      i +=1;
    }   
    return 'Простое число';
  }
  console.log(26, f(26));
  console.log(2, f(2));
  console.log(0, f(0));
  console.log(1001, f(1001));

  Module.exports = f;