function getProperty(property,obj) {
  if (!obj.hasOwnProperty(property)) {
    obj[property] = 'new'; //eslint-disable-line
  }

  return obj;
}


module.exports = getProperty;
