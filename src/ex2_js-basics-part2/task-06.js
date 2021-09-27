function testSimple(a) {
  if (a <= 1000) {
    if ((a === 0) || (a === 1)) {
      console.log('Не причисляется ни к простым, ни к составным числам');
    } else {
      for (let i = 2; i <= a; i += 1) {
        if (((a / i) % 2 === 0) || ((a / i) % 3 === 0) || ((a / i) % 5 === 0)) {
          console.log(`Число ${a} - составное`);
        } else {
          console.log(`Число ${a} - простое`);
        }
      }
    }
  } else {
    console.log('Данные неверны');
  }
}

module.exports = testSimple;
