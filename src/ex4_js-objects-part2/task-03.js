function myTrim(str){
  if(typeof str === 'string'){
    return str.trim();
  }
  return str;
}
module.exports = myTrim;