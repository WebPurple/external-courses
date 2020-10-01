function arrCheck(e) {
  const firstElement = e[0];

  for (let i = 1; i < e.length; i++) {
    if (firstElement !== e[i]) {
      return false
    }
  }

  return true;
}

module.exports = arrCheck;
