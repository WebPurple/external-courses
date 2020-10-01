function getProperty(obj, property) {
  const bool = obj.hasOwnProperty(property);

  if (!bool) {
    obj[property] = 'new';
  }

  return obj;
}

module.exports = getProperty();
