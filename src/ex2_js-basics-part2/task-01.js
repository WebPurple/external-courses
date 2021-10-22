// eslint-disable-next-line consistent-return
function whatIsIt(a) {
  if (typeof a === 'number') {
    return 'number';
  }
  if (typeof a === 'string') {
    return 'string';
  }
  if (isNaN(a)) {
    return undefined;
  }
  if (typeof a !== 'number' && typeof a !== 'string' && !isNaN(a)) {
    return undefined;
  }
}

module.exports = whatIsIt;
