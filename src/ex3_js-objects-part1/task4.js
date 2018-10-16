var key;
var objectOne = {
    isFemale: true, 
    age: 18
};

var name;

function showObject(){
for (key in objectOne ) {
    if (objectOne.name === undefined) {
        objectOne.name = "new";  
    }
}
console.log(objectOne);
}

showObject();