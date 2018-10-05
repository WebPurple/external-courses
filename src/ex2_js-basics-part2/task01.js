
function stringOrNumber() {
    var num = prompt("Введите текст или число", "");
      if (isNaN(num)) {
        console.log("Строка");
      }
      else {
        console.log("Число");
      }
  }
  
stringOrNumber();