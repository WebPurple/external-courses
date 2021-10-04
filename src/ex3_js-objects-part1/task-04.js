function checkAndAddNewProperty(property, objectExample) {
  const presence = objectExample.hasOwnProperty(property);
  if (!presence) {
    // eslint-disable-next-line no-param-reassign
    objectExample[property] = 'new';
  }
  return objectExample;
}

module.exports = checkAndAddNewProperty;
