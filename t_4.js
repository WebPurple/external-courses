function getModifyCopyObj($prop,$obj){
let result=$obj;
          if (!($prop in result))
          {
            result[$prop]="new";
          }
return result;
}
module.exports = getModifyCopyObj