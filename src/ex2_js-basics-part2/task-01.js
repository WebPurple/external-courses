function returnDataTypes(value){ 
  if(typeof(value) === 'string'){
    return 'string'
  }else if(typeof(value) === 'number'){
    return 'number'
  }
  return undefined;
}

module.exports = returnDataTypes;