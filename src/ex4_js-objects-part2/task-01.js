function searchPropertyProto(property, obj) {
  let result;
  const protoObj = Object.getPrototypeOf(obj);

  for (let key in protoObj) {
    if (key === property) result = protoObj[key];
  }

  return result;
}

module.exports = searchPropertyProto;
