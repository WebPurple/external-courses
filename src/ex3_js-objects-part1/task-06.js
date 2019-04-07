/*
EPAM PracticWork #3 task-06
Remizov Maxim, 2019

Написать функцию, которая делает глубокую копию (deep clone) объекта. Глубокая копия, значит, что если одно из свойств содержит объект оно также должно быть скопировано, чтобы создалась новая ссылка на соответствующий объект. Глубина вложенности может быть бесконечной, поэтому надо использовать рекурсию.
*/
var deepClone = function(obj) {
    var objCopy = {};
    for(var key in obj){           
      if(typeof obj[key] === "object"){        
        if(Array.isArray(obj[key])){
          objCopy[key] = Object.values(deepClone(obj[key]));
        }else{
          objCopy[key] = deepClone(obj[key]);
        }        
      }else{        
        objCopy[key] = obj[key];        
      }      
    }
  return objCopy;
}
module.exports = deepClone;
