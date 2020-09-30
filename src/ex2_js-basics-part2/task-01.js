function typeDifinition(e) {
  const type = typeof e;
  if (type === "string" || (type === "number" && !isNaN(e))) {
    
    return type;
  }

  return undefined;
}

module.exports = typeDifinition;
