function thisXis(e) {
  if (typeof e === "string" || (typeof e === "number" && !isNaN(e))) {
    return typeof e;
  }
  return undefined;
}

module.exports = thisXis;
