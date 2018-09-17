const {readFileSync} = require('fs');

const readCode = absolutePath => {
    try {
        return readFileSync(absolutePath).toString();
    } catch (err) {
        return null;
    }
};

const softRequire = modulePath => {
    try {
        return require(modulePath);
    } catch (err) {
        return null;
    }
};

exports.createTask = (dirPath, read = false) => (number, cb) => {
    const oneParam = typeof number === 'function';
    const taskCb = oneParam ? number : cb;
    const taskNo = oneParam ? '' : number;

    const pathToTask = `${dirPath}/task${taskNo ? `-${taskNo}` : taskNo}.js`;
    const moduleExport = read
        ? readCode(`${__dirname}/src/${pathToTask}`)
        : softRequire(`./src/${pathToTask}`);
    const conditionalDescribe = moduleExport ? describe : xdescribe;

    conditionalDescribe(`Task ${taskNo}`, () => taskCb(moduleExport));
};
