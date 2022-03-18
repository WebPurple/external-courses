function findProperty(prop, object) {
  if (object.__proto__.hasOwnProperty(prop)) {
    return object[prop];
  }
  return undefined;
}

module.export = findProperty();
