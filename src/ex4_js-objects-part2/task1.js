var obj = { name: "Alex", age: 18, isMale: true};
var key;
var objNew = Object.create(obj);
var prop = "age";

obj.height = 180;
objNew.height=160;


function hasProperty(objOne, prop) {
    if (!objOne.hasOwnProperty(prop)) {
        console.log(objOne.age);
        }
     else {
         console.log("нам нужны свойства только из прототипа")
     }

}

hasProperty(objNew, "age");
hasProperty(objNew, "height");





  

