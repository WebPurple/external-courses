function arrCheck(e) {
  let bool = true;
  const firstElement =e[0]

  for (let i = 0; i < e.length; i++) {
    if (firstElement !== e[i]) {
      bool = false;
      return bool
    }
  }

  return bool;
}

module.exports = arrCheck;
