// eslint-disable-next-line consistent-return
const getObj = function (obj) {

    // eslint-disable-next-line guard-for-in
    for (key in obj) {
        
    return console.log(key, obj[key]);
    }
};
module.exports = getObj;
