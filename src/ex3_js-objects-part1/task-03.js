const compareObjectProps = (obj) => {
  const objComparison = {};
  Object.keys(obj).forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      objComparison[key] = obj[key];
    }
  });
  return objComparison;
};
module.exports = compareObjectProps;
