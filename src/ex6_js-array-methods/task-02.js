function cloneSome(array, callback) {
  let flag = false;
  array.forEach((item, i) => {
    if (callback(item, i, array)) {
      flag = true;
    }
  });
  return flag;
}

module.export = cloneSome;
