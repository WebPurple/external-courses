function maxElement() {
    var arr=[];
    var max;
       let items = prompt("Перечислите через запятую элементы", "");
          if ((typeof(items)) === "string" && (typeof(items)) != null && items != ""){
                    console.log('ввод верный');
                    arr = items.split(",");
              
                } else {
            alert ("Введите корректные данные");
              i--;
              }
  max = Math.max.apply(null, arr);
  
  console.log("Максимальный элемент: " + max);
    }
  
maxElement();