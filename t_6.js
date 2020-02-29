function getDeepCloneObj($obj){
    let copyObj={};
      for (value in $obj)
        {
          if (typeof($obj[value])==="object")
		{
            	copyObj[value] = getDeepCloneObj($obj[value]);
		}
          else
		{
            	copyObj[value] = $obj[value];
		}
        }
    return copyObj;
}
module.exports = getDeepCloneObj