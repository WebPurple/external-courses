function getRandomMintoMax(min, max) {
    const RandomMintoMax = min + Math.random() * (max - min);

    return Math.round(RandomMintoMax);
}

module.exports = getRandomMintoMax;
