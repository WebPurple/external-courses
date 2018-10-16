var myProto = function ()
{ var obj={}
obj=Object.create(null)
return obj
}

console.log(myProto())
console.log(myProto())