var f = function (F) {
    var count = 0;
    for (var i=0; i<F; i++){
        if ((F%i) === 0 ) count++;
            }
    if (count <= 2)
    console.log ("число ", F," - простое"); 
    else 
    console.log ("число ", F," - составное");
}
f (6)