function cloneEver(array, callback) {
  let flag = false;
  array.forEach((item, i) => {
    if (callback(item, i, array)) {
      flag = true;
    } else {
      flag = false;
    }
  });
  return flag;
}

module.export = cloneEver;
