function checkType(data) {
  if (typeof data === 'string') return 'string';
  if (typeof data === 'number' && !Number.isNaN(data)) return 'number';
}

module.exports = checkType;