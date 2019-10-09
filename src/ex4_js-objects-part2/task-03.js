let stringTrimming = function(string){
if (string[0] === " " && string[string.length-1] === " "){
return string.slice(1,string.length-1)
}  
if (string[0] === " ") {
return string.slice(1)
}
if (string[string.length-1] === " "){
return string.slice(0,string.length-1)
}
return string
}
module.exports = stringTrimming;