var deepCopyObject = function (obj){
    var copyObject ={}
    if ( (typeof obj ==='object'))
    { 
     for ( var key in obj)
      {  if(typeof obj[key]==='object')
      { 
        copyObject[key]=deepCopyObject(obj[key])
        }
      else {copyObject[key]=obj[key] }    }
            return copyObject; 
    }
    else console.log('Перееданный параметр не соотвествует типу объект')
    
    }


var userObject ={
    Lastname:'Sleptsov',
    Firstname:{First:'Oleg',
                Second:'Ignasio'},
    Location: {City:'Ryazan',
                Street:'Tsiolkovsky',
                House :5,
                Apartnent:391},
    Cars: {First:{Brand:'Land Rover', Model:'Range Rover',Color:'Red' },
            Second:{Brand:'Crysler', Model:'C300',Color:'Black' }}            

};
    
 //console.log(typeof userObject.Location)

 var checkObject={}
    checkObject=deepCopyObject(userObject)
    userObject.Location.Street=false
    userObject.Location.City=false
    userObject.Cars.First.Color=undefined
       console.log(userObject)
    console.log(checkObject)