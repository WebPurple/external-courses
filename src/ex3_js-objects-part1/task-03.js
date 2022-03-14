const checkingValueByKey = (srting, obj) => {
  if (srting in obj) {
    if (obj.hasOwnProperty(srting)) {
      return true;
    }
  }

  return false;
};

module.exports = checkingValueByKey;
