/* eslint-disable no-use-before-define */
const { readFileSync } = require('fs');

module.exports = (exerciseName, read = false, taskExt = 'js') => {
  const dirWithTask = `${__dirname}/src/${exerciseName}`;

  return {
    task: (number, cb) => {
      const oneParam = typeof number === 'function';
      const taskCb = oneParam ? number : cb;
      const taskNo = oneParam ? '' : number;

      const pathToTask = `${dirWithTask}/task${taskNo ? `-${taskNo}` : taskNo}.${taskExt}`;
      const moduleExport = read ? readCode(pathToTask) : softRequire(pathToTask);

      const conditionalDescribe = moduleExport ? describe : xdescribe;
      conditionalDescribe(`Task ${taskNo}`, () => {
        taskCb(moduleExport);
      });
    },
  };
};

const readCode = (absolutePath) => {
  try {
    return readFileSync(absolutePath).toString();
  } catch (err) {
    return null;
  }
};

const softRequire = (modulePath) => {
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(modulePath);
  } catch (err) {
    return null;
  }
};
