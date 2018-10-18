
function createNoneProtObject(){
    var data = Object.create(null);  
    console.log(data);
    console.log(data.prototype);
}

createNoneProtObject();


