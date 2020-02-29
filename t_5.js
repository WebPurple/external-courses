function getMaxNumber($arr)
{
      let $maxNumber = -Infinity;
      for(let i=0;i<$arr.length;i++)
      {
         if (typeof($arr[i])==="number" && !Number.isNaN($arr[i]))
           {
             $maxNumber=Math.max($arr[i],$maxNumber)
           }
      }
      return $maxNumber;
}
module.exports = getMaxNumber
