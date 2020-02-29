function getArrayElements(arr)
{
  if (Array.isArray(arr))
    {
      for(let i=0;i<arr.length;i++)
      {
        console.log(`arr[${i}] = ${arr[i]}`);
      }
      console.log(`arr.length = ${arr.length}`);
    }
  else
	{
    		console.log("undifened");
	}
  return;
}
module.exports = getArrayElements
