var checkAndAddCaption = function (str,obj){

    if ((typeof str ==='string')&& (typeof obj ==='object'))
    {
     for (var key in obj)
     {if (key===str) return true }
     return false
    }
    else console.log('Перееданные параметры не соотвествуют типам строка или объект')
    return false
    }
    
    var userObject ={};
    
    userObject['Lastname']='Sleptsov';
    userObject['Age']=26;
    userObject['AgreeToContact']=true;
    
    console.log(checkObjectCaption('Age',userObject))
    console.log(checkObjectCaption('age',userObject))
    console.log(checkObjectCaption(1))
    