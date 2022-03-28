function cloneMap(array, callback) {
  const newArr = [];
  array.forEach((e, i) => {
    newArr.push(callback(e, i, array));
  });

  return newArr;
}

module.export = cloneMap;
