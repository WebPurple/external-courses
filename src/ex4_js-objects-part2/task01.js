var obj ={name:'Object',
            count:123};
var myObject = Object.create(obj) ;
myObject['key']='key';

var myProto = function (obj,keyProto)
{ for (var key in obj)
{if (!obj.hasOwnProperty(keyProto))
    return false
    else return true 
}
}

console.log(myProto(myObject,'name'))
console.log(myProto(myObject,'key'))

