function getProperties(object) {
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            console.log(`${property}:${object[property]}`)
        }
    }

    return;
}

module.exports = getProperties;
