const addingNewKeys = (str, obj) => {
  let newObj = {};
  newObj = obj;
  if (!(str in obj)) {
    newObj[str] = 'new';
  }
  return newObj;
};
module.exports = addingNewKeys;
