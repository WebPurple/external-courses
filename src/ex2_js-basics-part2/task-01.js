const printStringOrNumber = (arg) => {
  if (typeof arg === 'string') {
    return 'string';
  }

  if (typeof arg === 'number') {
    return 'number';
  }

  if (isNaN(arg)) {
    return undefined;
  }

  return undefined;
};

module.exports = printStringOrNumber;
