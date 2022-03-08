const returnMaxNumber = (ARRAY) => {
  let sort;
  const COPY_OF_ARRAY = ARRAY;

  for (let i = 0; i < COPY_OF_ARRAY.length; i += 1) {
    for (let d = 0; d < COPY_OF_ARRAY.length; d += 1) {
      if (COPY_OF_ARRAY[d] < COPY_OF_ARRAY[d + 1]) {
        sort = COPY_OF_ARRAY[d];
        COPY_OF_ARRAY[d] = COPY_OF_ARRAY[d + 1];
        COPY_OF_ARRAY[d + 1] = sort;
      }
    }
  }

  return COPY_OF_ARRAY[0];
};

module.exports = returnMaxNumber;
