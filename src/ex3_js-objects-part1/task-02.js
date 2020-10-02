function objView(e) {
 
    for (let key in e) {
      if(key){
      console.log(`${key}:${e[key]}`);
      }
  }
  
  return;
}

module.exports = objView();
