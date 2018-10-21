"use strict"; 

function clone(obj) {

    var temp = null;
    var key = null;

    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    if (obj instanceof Date)
        temp = new obj.constructor();
    else
        temp = obj.constructor();

    for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }

    return temp;
}

module.exports = clone;