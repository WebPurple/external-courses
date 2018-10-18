function randomize(min, max) {
    var result = min - 0.5 + Math.random() * (max - min +1);
    result = Math.round(result);
    return(result);

}

