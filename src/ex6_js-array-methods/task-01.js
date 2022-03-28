function cloneSlice(array, begin, end) {
  const newArr = [];
  array.forEach((e, i) => {
    if ((begin <= i || begin === undefined) && (end > i || end === undefined)) {
      newArr.push(e);
    }
  });
  console.log(newArr);
}

module.export = cloneSlice;
