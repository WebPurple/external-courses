function review(thing) {
  if (typeof (thing) === 'string') {
    return 'string';
  } if (typeof (thing) === 'number') {
    return 'number';
  } if (isNaN(thing)) {
    return undefined;
  } return undefined;
}

module.exports = review;
