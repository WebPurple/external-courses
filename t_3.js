function getCountParity(arr)
{
  if (Array.isArray(arr))
    {
      let parity=0;
      let notParity =0;
      let zero=0;
      for(let i=0;i<arr.length;i++)
      {
        if (!Number.isInteger(arr[i])) continue;
        if (arr[i]===0) {zero++; continue; }
        if ((arr[i] % 2)===0) {parity++; continue; }
          else
            {notParity++; continue; }
      }
      console.log(`Четных: ${parity}, Нечетных: ${notParity}, Ноль: ${zero}`)
    }
  else
	{
    	console.log("undifened");
	}
  return;
}
module.exports = getCountParity
