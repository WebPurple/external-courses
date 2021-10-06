function typeArgument(argument) {
  if (typeof argument === 'string') {
    return 'string';
  }
  if (String(argument) === 'NaN') {
    return undefined;
  }
  if (typeof argument === 'number') {
    return 'number';
  }
  return undefined;
}

module.exports = typeArgument;
