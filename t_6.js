function getInformNumber($value)
{
let result;
        if (Number.isInteger($value) && $value>1 && $value<=1000) 
        {
          for(let i = 2; i<$value; i++)
            {
              if (($value % i) ===0) result = `����� ${$value} - ��������� �����`;
            }
          result = `����� ${$value} - ������� �����`;
        }
        else 
	{
		result = `������ �������`;
	}
return result;
}
module.exports = getInformNumber
