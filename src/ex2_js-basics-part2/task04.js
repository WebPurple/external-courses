function isTrue() {
    var arr=[];
    var i;
       let items = prompt("Перечислите через запятую элементы", "");
          if ((typeof(items)) === "string" && (typeof(items)) != null && items != ""){
                    console.log('ввод верный');
                    arr = items.split(",");
              
                } else {
            alert ("Введите корректные данные");
              i--;
              }
  
    for (i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i-1]) {
    console.log(true);
  }
  else{
    console.log(false);
  }
  
      }
  }
  isTrue();