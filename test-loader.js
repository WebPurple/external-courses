const path = require('path');
const {readFileSync} = require('fs');

const getCode = (absolutePath, defaultSource = `${__dirname}/src`) =>
    readFileSync(path.resolve(path.join(defaultSource, absolutePath))).toString();

module.exports = getCode;
