function newObj(str, obj) {
  const clone = { ...obj };

  if (!obj.hasOwnPropert(str)) {
    clone[str] = 'new';
  }

  return clone;
}

module.export = newObj;
