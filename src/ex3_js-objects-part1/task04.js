var checkAndAddCaption = function (str,obj){

    if ((typeof str ==='string')&& (typeof obj ==='object'))
    {
     if (str in obj)
     {return obj }
     else {
          obj[str]='new';
            return obj; }
    }
    else console.log('Перееданные параметры не соотвествуют типам строка или объект')
    
    }
    
    var userObject ={};
    
    userObject['Lastname']='Sleptsov';
    userObject['Age']=26;
    userObject['AgreeToContact']=true;

    console.log(userObject)
    console.log(checkAndAddCaption('Age',userObject))
    console.log(userObject)
    console.log(checkAndAddCaption('age',userObject))
    console.log(checkAndAddCaption(1,userObject))
    