function hasPropInObj($prop,$obj){
let result = false;
  if (typeof($obj)==="object")
    {
      for (value in $obj)
        {
          if (value===String($prop)) 
		{
		result = true;
		break;
		}
        }
    }
return result;
}
module.exports = hasPropInObj