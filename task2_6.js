function Digit(Check) {
  if (Check % 2 !== 0 && Check !== 1 && Check < 1000 && Check > 0) {
    console.log('Простое число:', Check);
  } if (Check % 2 === 0 && Check !== 0 && Check < 1000 && Check > 0) {
    console.log('Число не является простым:', Check);
  }
  if (Check > 1000) {
    console.log('Данные не верны');
  }
  if (Check < 0) {
    console.log('Данные не верны');
  }
  if (Check === 0) {
    console.log('Ни причисляется ни к простым, ни к составным числам:', 0);
  }
  if (Check === 1) {
    console.log('Ни причисляется ни к простым, ни к составным числам:', 1);
  }
}
Digit(1);
