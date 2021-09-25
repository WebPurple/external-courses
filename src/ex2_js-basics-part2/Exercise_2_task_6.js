function primeNumbers(numberExample) {
  if (numberExample > 1000) {
    console.log('Данные неверны');
  } else if ((numberExample === 0) || (numberExample === 1)) {
    console.log('Не причисляется ни к простым, ни к составным числам');
  } else {
    let count = 0;
    for (let i = 2; i < numberExample; i += 1) {
      if (numberExample % i === 0) {
        count += 1;
      }
    }
    console.log(count);
    if (count) {
      console.log('Составное число');
    } else {
      console.log('Простое число');
    }
  }
}

module.exports = primeNumbers;
