function someSimilarity(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true
        }
    }
    return false
}

module.exports = someSimilarity;