function getType(value) {
  if (Number.isNaN(value)) {
    console.log(undefined);
  } else if (typeof (value) === 'number') {
    return 'number';
  } else if (typeof (value) === 'string') {
    return 'string';
  } else {
    return undefined;
  }
  return undefined;
}

module.exports = getType;
