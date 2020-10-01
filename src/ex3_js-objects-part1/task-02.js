function objView(e) {
  for (let key in e) {
    console.log(`${key}:${e[key]}`);
  }
  
  return;
}

module.exports = objView();
