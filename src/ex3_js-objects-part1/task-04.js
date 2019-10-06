function addObject(str, obj) {
  let added = obj;
  if (str in obj) {
    return added[str];
  }

  added[str] = "new";
  return(added.str);
};
module.exports = addObject;