function arrCheck(e) {
  let bool = true;

  for (let i = 0; i < e.length; i++) {
    for (let j = 1; j < e.length; j++) {
      if (e[i] !== e[j]) {
        bool = false;
      }
    }
  }

  return bool;
}

module.exports = arrCheck;
