//js_task11__Isaev_Arsenyi

str1="qqwwe";

function symbolInStr(str) {
  var obj={},
  arr = str.split('');
  for(var i=0; i < arr.length; ++i) {
    if(obj[arr[i]]) ++obj[arr[i]];
     else obj[arr[i]] = 1;      
     } 
  for(var key in obj) {
          if(obj.hasOwnProperty(key)) console.log(key + ' - ' + obj[key]);         
  }
  return obj;
}

console.log(symbolInStr(str1));


module.exports = symbolInStr;