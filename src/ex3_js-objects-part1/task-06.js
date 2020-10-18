
const cloneObj = function (obj) {
    let copyobj = {};
    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
        const keyobj = obj[key]
    

        if (typeof keyobj === 'object') {
            if(Array.isArray(keyobj)) {
                let copyArr = [];

                for( let item of keyobj) {
                    copyArr.push(cloneObj(item))
                }
                copyobj[key] = copyArr;
                } else {
                    copyobj[key] = cloneObj(keyobj);
                }                
            } else {
                copyobj[key] = keyobj;
            }
        }
        return copyobj;
    };
module.exports = cloneObj;
