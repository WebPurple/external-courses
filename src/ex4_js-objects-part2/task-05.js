function search(str, needle){
  if(str.indexOf(needle) >= 0){
    return true;
  }
  return false;
}
module.exports = search;