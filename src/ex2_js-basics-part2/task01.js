
function stringOrNumber(num) {

    if (isNaN(num)) {
      console.log("Строка");
    }
    else {
      console.log("Число");
    }
}

stringOrNumber("Строка");
stringOrNumber("26");