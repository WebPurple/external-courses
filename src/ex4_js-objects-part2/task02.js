var myProto = function ()
{ var obj={a:1,
        b:'true'}
obj=Object.create(null)
obj={a:1,
    b:'true'}
return obj
}

console.log(myProto())
console.log(myProto())