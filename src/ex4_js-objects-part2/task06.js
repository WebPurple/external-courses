var setAllFirstCharsUpper = function(str=""){
    var newWord=true;
    for (let index = 0; index < str.length; index++) {
        if (newWord)
        {
            str= str.substring(0,index) + str[index].toUpperCase() + str.substring(index+1,str.length);
            newWord=false;
        }
        if(str[index]===" ")
        {
            newWord=true;
        }
    }  
    return str;
}

setAllFirstCharsUpper("i'm too young to feel so numb");