function getProperty(obj, propertyPath) {
  let result = obj;
  const arr = propertyPath.split('');
  let i = 0;
  while (i < arr.length) {
    if (!result.hasOwnProperty(arr[i])) {
      return 'undefined';
    }
    result = result[arr[i]];
    i += 1;
  }
  return result;
}
module.export = getProperty;
