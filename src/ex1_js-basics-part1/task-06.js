function checkOfNumber(number){
  if (number > 1000 || typeof number !== "number" || number < 0 ){
    console.log("Данные неверны!");
  } else if (number === 0 || number === 1){
    console.log ("0 и 1 не являются простым или составным числом!");
  } else {
    let isSimple = true;
    for (let divider = 2; divider < number; divider++){
      if (number % divider === 0 ){
        console.log(`Число ${number} составное `);
        isSimple = false;
        break;
      } 
    } 
    if (isSimple === true){
    console.log(`Число ${number} простое` )
  }
  }
}
module.exports = checkOfNumber;