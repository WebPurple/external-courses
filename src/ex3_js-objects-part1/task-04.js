function getProperty(property,obj) {
  const bool = obj.hasOwnProperty(property);

  if (!bool) {
    obj[property] = 'new'; //eslint-disable-line
  }

  return obj;
}


module.exports = getProperty();
