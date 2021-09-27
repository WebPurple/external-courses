function chekType(p) {
  if (typeof (p) === 'string') {
    return 'string';
  } if (typeof (p) === 'number') {
    return 'number';
  } if (isNaN(p)) {
    return 'undefined';
  } return 'undefined';
}
console.log(chekType);

module.exports = chekType;
