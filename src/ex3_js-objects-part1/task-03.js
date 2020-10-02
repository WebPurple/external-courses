function getProperty(property, obj) {
  if (property in obj) {
    return true;
  }
  
  return false;
}

module.exports = getProperty();
