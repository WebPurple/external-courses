function typeArgument(argument) {
  let result;
  if (typeof argument === 'string') {
    result = 'string';
  } if (typeof argument === 'number') {
    if (String(argument) === 'NaN') {
      result = null;
    }
    result = 'number';
  }
  return result;
}

module.exports = typeArgument;
