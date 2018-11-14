var setAllFirstCharsUpper = function(str="",str2, num){
    var newWord=true;
    var wordCount=0;
    for (let index = 0; index < str.length; index++) {
        if (index===str.length-1 && wordCount===num)
        {
            str= str+" "+str2;
            break;
        }
        else if (newWord && str[index]!==" ")
        {
            if (wordCount===num)
            {
                str= str.substring(0,index) + str2 + " "+str.substring(index,str.length);
                break;
            }
            wordCount++;
            newWord=false;
        }
        else
        if(str[index]===" ")
        {
            newWord=true;
        }
       
    }  
    return str;
}

console.log(setAllFirstCharsUpper("After Every Party I Die", "Infinity",2));