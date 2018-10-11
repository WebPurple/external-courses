var copyObject = function (obj){
    var copyObject ={}
    if ( (typeof obj ==='object'))
    { 
     for ( var key in obj)
      {    copyObject[key]=obj[key]     }
            return copyObject; 
    }
    else console.log('Перееданный параметр не соотвествует типу объект')
    
    }
    
    var userObject ={};
    
    userObject['Lastname']='Sleptsov';
    userObject['Age']=26;
    userObject['AgreeToContact']=true;
    
    var checkObject={}
    checkObject=copyObject(userObject)
    userObject.AgreeToContact=false
    console.log(userObject)
    console.log(checkObject)