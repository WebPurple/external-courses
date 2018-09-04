const path = require('path');
const {readFileSync} = require('fs');

module.exports = {
  getCode: absolutePath => readFileSync(
      path.resolve(absolutePath)
    ).toString()
};
