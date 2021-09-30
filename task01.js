function getValueType(value) {
  if (typeof value === 'number' && Number.isNaN(value)) {
    return console.log('undefined');
  }
  if (typeof value === 'number') {
    return console.log('number');
  }
  if (typeof value === 'string') {
    return console.log('string');
  }
  return console.log('undefined');
}

const values = ['simple', 22, false, undefined, parseInt('simple', 10)];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < values.length; i++) {
  getValueType(values[i]);
}

module.exports = getValueType;
