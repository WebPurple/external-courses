function returnPropFromProt(property, obj) {
    if (!obj.hasOwnProperty(property)) {
        return obj[property];
    }
    return undefined;
}

module.exports = returnPropFromProt;
