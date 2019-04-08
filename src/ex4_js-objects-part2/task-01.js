function hasProtoProperty(name, obj){
  if(typeof name === 'string' && obj.__proto__.hasOwnProperty(name)){
    return obj.__proto__[name];
  }
  return undefined;
}
module.exports = hasProtoProperty