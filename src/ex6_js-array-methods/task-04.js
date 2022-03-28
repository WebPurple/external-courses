function cloneFilter(array, callback) {
  const newArr = [];
  array.forEach((e, i) => {
    if (callback(e, i, array)) {
      newArr.push(e);
    }
  });
  return newArr;
}

module.export = cloneFilter;
