function typeCheck(a) {
  if (isNaN(a) === true && typeof a !== 'string') {
    return undefined;
  }

  if (typeof a === 'string') {
    return 'string';
  }

  if (typeof a === 'number') {
    return 'number';
  }

  return undefined;
}
module.exports = typeCheck();
