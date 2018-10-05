  function showType(a) {

    switch (typeof a)
    { case 'string': console.log ('string');
        break;
        case 'number':console.log ('number');
        break;
        default: console.log ('undefined'); break;
    }

 };

 var e=[1,2,'ukjku']
showType(e);

var a=13;
showType(a);

var b='13';
showType(b);

var c=true;
showType(c);

var d=null;
showType(d);

