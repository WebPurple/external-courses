module.exports = getMaximum;

function getMaximum(massive) {
    let max = 0;
    for (let i = 0; i < massive.length; i++) {
        if (massive[i] > max) {
            max = massive[i];
        };
    }
    return max;
}