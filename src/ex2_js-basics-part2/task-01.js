function numberOrString(taken) {
  if ((typeof taken === 'number') && (!isNaN(taken))) {
    return 'number';
  }

  if (typeof taken === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = numberOrString;
