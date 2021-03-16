function returnObjectPropertiesAndKeys (someObject) {
    for (let key in someObject) {
         console.log(key,someObject[key]);
    }
    return;
}

module.exports = returnObjectPropertiesAndKeys;