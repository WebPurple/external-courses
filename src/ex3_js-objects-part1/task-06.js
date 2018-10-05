'use strict';

function deepClone(someObject){
    
    var objectClone;
    if (isArray(someObject)){
        objectClone = [];
    } else {
        objectClone = {};
    }

    Object.keys(someObject).forEach(key => {
        if (typeof(someObject[key]) !== 'object'){
            objectClone[key] = someObject[key];
        } else {
            objectClone[key] = deepClone(someObject[key]);
        }
    });
    return objectClone;
}

function isArray(someObject){ //нужна для проверки является ли объект массивом
    var i = 0;                //без этой проверки код падает, считая f - объектом,
    var result = true;        //а f - массив
    var objKeys = Object.keys(someObject);
    while (result && i < objKeys.length){
        if (i != objKeys[i]){
            result = false;
        }
        i++;
    }
    return result;
}

module.exports = deepClone;
