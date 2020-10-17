function deleteSpace(stri) {
  const str = stri.split("");

  if (str[0] === " ") {
    str.shift();
  }

  if (str[str.length - 1] === " ") {
    str.pop();
  }

  return str.join("");
}

module.exports = deleteSpace;
