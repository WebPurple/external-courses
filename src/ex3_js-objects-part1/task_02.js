var x = {
    a: 5,
    b: "Hello"
}

function object(obj) {
    for (var key in obj) {
        console.log(key);
        console.log(obj[key])
    }

}

return object(x)