function createEmptyObj() {
  const EmptyObj = {
    name: 'testname',
    id: 'testid',
  };
  delete EmptyObj.name;
  return null;
}
module.exports = createEmptyObj();
