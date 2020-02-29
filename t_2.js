function getKeysValuesOfObject(obj){
  if (typeof(obj)==="object")
    {
      for (let value in obj)
        {
          console.log(`${value} = ${obj[value]}`)
        }
    }
return;
}
module.exports = getKeysValuesOfObject