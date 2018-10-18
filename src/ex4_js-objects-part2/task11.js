str = 'try to count every char';

function find_occurences(str, char_to_count){
    
    console.log(str.split(char_to_count).length - 1);
}

for (var i = 0; i < str.length; i++) {
find_occurences(str, str[i]);}
