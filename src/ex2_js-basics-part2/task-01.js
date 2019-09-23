function isNumberOrString(value) {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return 'number';
  }
  if (typeof value === 'string') {
    return 'string';
  }
  return undefined;
}

module.exports = isNumberOrString;