function revers(str){
    var reversStr = '';
    for(var i = str.length; i > 0; i--){
        if(str[i - 1]){
            reversStr += str[i -1];
        }
    }
  return reversStr;
}
module.exports = revers;