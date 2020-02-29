function getCopyObj($obj){
let result;
  if (typeof($obj)==="object")
    {
      result = Object.assign({}, $obj);
    }
return result;
}
module.exports = getCopyObj