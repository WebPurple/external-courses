function getTypeNumOrString(value)
{
let result;
  if ((typeof(value) === "number" || typeof(value) === "string") && !Number.isNaN(value))
	{
    		result = typeof(value);
	}
	return result;
}
module.exports = getTypeNumOrString