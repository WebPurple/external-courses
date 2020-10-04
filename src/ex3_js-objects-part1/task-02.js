function checkObjKey(obj) {
  for (let key in obj) {
    console.log(`obj key - ${key}, `, `obj property - ${obj[key]}`);
  }

  return;
}

module.exports = checkObjKey;
