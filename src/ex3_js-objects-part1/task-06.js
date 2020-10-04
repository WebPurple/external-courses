module.exports = function deepClone(obj) {
  let newObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        let newArr = [];        
        for (let i = 0; i < obj[key].length; i++) {
          if (typeof obj[key][i] === 'object') {
            newArr.push(deepClone(obj[key][i]));
          } else {
            newArr.push(obj[key][i]);
          }
        }
        newObj[key] = newArr;
      } else if (typeof obj[key] === 'object') {
        newObj[key] = deepClone(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}
