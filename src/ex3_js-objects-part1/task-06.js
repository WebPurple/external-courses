function getProperty(obj, propertyPath) {
  let message = true;
  let result = obj;
  const arr = propertyPath.split('');
  let i = 0;
  while (i < arr.length) {
    if (result.hasOwnProperty(arr[i])) {
      message = true;
      result = result[arr[i]];
    } else {
      message = false;
    }

    i += 1;
  }
  if (message) {
    return result;
  } return 'undefined';
}
module.export = getProperty();
