var setLenght = function(str="", lenght=1){
    if (str.length>lenght)
    {
        str=str.substr(str, lenght-1)+"…";
    }
    return str;
}

setLenght("elephant", 3);