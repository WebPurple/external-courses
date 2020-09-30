function arrCheck(e) {
  let bool = true;

  for (let i = 0; i < e.length; i++) {
    if (e[0] !== e[i]) {
      bool = false;
    }
  }

  return bool;
}

module.exports = arrCheck;
