function checkType(data) {
  const typeData = typeof data;

  if (typeData === 'string') return typeData;
  if (typeData === 'number' && !Number.isNaN(data)) return typeData;

  return undefined;
}

module.exports = checkType;
