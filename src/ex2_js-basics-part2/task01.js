function getValueType(value) {
  if (typeof value === 'number' && Number.isNaN(value)) {
    return undefined;
  }
  if (typeof value === 'number') {
    return Number;
  }
  if (typeof value === 'string') {
    return String;
  }
  return undefined;
}

const values = ['simple', 22, false, undefined, parseInt('simple', 10)];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < values.length; i++) {
  getValueType(values[i]);
}

module.exports = getValueType;
