const displayingInformationObject = (testObject) => {
    // eslint-disable-next-line guard-for-in
    for (let key in testObject) {
        console.log("Ключ " + key + " имеет значение " + testObject[key]);
    }

    return;
}

module.exports = displayingInformationObject;