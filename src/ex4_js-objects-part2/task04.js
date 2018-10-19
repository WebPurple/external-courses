ucFirst ("алена");
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
    console.log (ucFirst ("алена"));