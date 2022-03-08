const checkingForDataType = (data) => {
  if (typeof data === 'string' && Number.isNaN(data) !== true) {
    return 'string';
  }
  if (typeof data === 'number' && Number.isNaN(data) !== true) {
    return 'number';
  }

  return 'undefined';
};
module.exports = checkingForDataType;
