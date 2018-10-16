var key;
var objectOne = {
    isFemale: true, 
    age: 18
};

function showObject(){
for (key in objectOne ) {
    console.log("Ключ: " + key + " Значение: " + objectOne[key] );
}
}

showObject(objectOne);