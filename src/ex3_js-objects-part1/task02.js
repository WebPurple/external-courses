var showInfoObject = function (x) {

    if(typeof x ==='object'){
    for (var key in x){
        console.log(key+' : '+x[key])
    
    }
 //console.log(x);
}
else console.log('Передан не обект')
}

var userObject ={};

userObject['Lastname']='Sleptsov';
userObject['Age']=26;
userObject['AgreeToContact']=true;

showInfoObject(userObject)
showInfoObject(1)