function searchPropertyProto(property, obj) {
  const protoObj = Object.getPrototypeOf(obj);

  for (let key in protoObj) {
    if (key === property) return protoObj[key];
  }

  return property;
}

module.exports = searchPropertyProto;
