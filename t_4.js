function isSameElements(arr)
{
let result;
  if (Array.isArray(arr))
    {
      for(let i=1;i<arr.length;i++)
      {
        if (arr[i]!==arr[0]) result = false;
      }
        result = true;
    }
  return result;
}
module.exports = isSameElements
