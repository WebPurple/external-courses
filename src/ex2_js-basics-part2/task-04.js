pumodule.exports = checkIdenticalElements;

function checkIdenticalElements(massive) {
    let isIdenty = 0;
    for (let i = 0; i < massive.length; i++) {
        for (let j = 0; j < massive.length; j++) {
            if (i !== j) {
                if (massive[i] === massive[j]) {
                    isIdenty++;
                }
            }
        }
    }
    if (isIdenty > 0) {
        return true;
    }
    return false;
}