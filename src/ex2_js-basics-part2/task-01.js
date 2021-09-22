function TypeValue(value) {
  let val;
  if (typeof (value) === 'string') {
    val = 'string';
  } else if (typeof (value) === 'number') {
    val = 'number';
  } else if (isNaN(value)) {
    val = undefined;
  }

  return val;
}

module.exports = TypeValue;
