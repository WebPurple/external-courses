function getValueType(value) {
  if (typeof value === "number" && !isNaN(value)) {
    return "number";
  } else if (typeof value === "string") {
    return "string";
  }
    return undefined;

}

module.exports = getValueType;