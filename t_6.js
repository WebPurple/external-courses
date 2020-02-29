function getInformNumber($value)
{
let result;
        if (Number.isInteger($value) && $value>1 && $value<=1000) 
        {
          for(let i = 2; i<$value; i++)
            {
              if (($value % i) ===0) result = `Число ${$value} - составное число`;
            }
          result = `Число ${$value} - простое число`;
        }
        else 
	{
		result = `Данные неверны`;
	}
return result;
}
module.exports = getInformNumber
