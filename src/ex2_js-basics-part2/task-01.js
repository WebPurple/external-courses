function getValueType(value) {
  if (typeof value === "number") {
    return typeof value;
  } else if (typeof value === "string") {
    return typeof value;
  }
    return undefined;
}

module.exports = getValueType;