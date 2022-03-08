const dataTypeCheck = (value) => {
  let result;

  if (typeof (value) === 'number') {
    result = 'number';
  } else if (typeof (value) === 'string') {
    result = 'string';
  } else {
    result = undefined;
  }

  if (Number.isNaN(value)) {
    result = undefined;
  }

  return result;
};

module.exports = dataTypeCheck;
