function findProperty(objNew, prop) {
        if (objNew.__proto__[prop] !== undefined) {
        return true
        } else {
            return false
        }
}