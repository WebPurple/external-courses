function deepClone(obj) {
  let newObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const objKey = obj[key];

      if (Array.isArray(objKey)) {
        let newArr = []; 

        for (let i = 0; i < objKey.length; i++) {
          if (typeof objKey[i] === 'object') {
            newArr.push(deepClone(objKey[i]));
          } else {
            newArr.push(objKey[i]);
          }
        }

        newObj[key] = newArr;
      } else if (typeof objKey === 'object') {
        newObj[key] = deepClone(objKey);
      } else {
        newObj[key] = objKey;
      }
    }
  }

  return newObj;
}

module.exports = deepClone;
