function getType(arr){
  if(typeof(arr)==="number"&&!Number.isNaN(arr)){
    return "number";
  }
    else if (typeof(arr)==='string'){
	return 'string';
    }
return undefined;
}

module.exports=getType