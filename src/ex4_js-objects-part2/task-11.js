function checkLatter(str){
    var arCount = {};
    for(var i = 0; i < str.length; i++){
        if(arCount[str[i]] === undefined){
            arCount[str[i]] = 1;
        } else {
            arCount[str[i]]++;
        }
    }
    for(i in arCount){
		if(arCount[i]){
			console.log(arCount[i]);
		}
    }
}
module.exports = checkLatter;