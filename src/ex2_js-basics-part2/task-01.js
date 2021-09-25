function typeValue(value) {
  if (typeof (value) === 'string') {
    return 'string';
  }

  if (typeof (value) === 'number') {
    return 'number';
  }

  if (isNaN(value)) {
    return undefined;
  }

  return undefined;
}

module.exports = typeValue;
