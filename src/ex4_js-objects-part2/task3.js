var str = "  Тут много лишних пробелов ";


function trim(){
    while(str.charAt(str.length-1)==" "){str=str.slice(0,str.length-1)}
    while(str.charAt(0)==" "){str=str.slice(1,str.length)}
    console.log(str);
    }
    
trim(str);