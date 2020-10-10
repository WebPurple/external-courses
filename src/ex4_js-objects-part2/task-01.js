function searchPropertyProto(property, obj) {
  return Object.getPrototypeOf(obj)[property];
}

module.exports = searchPropertyProto;
