var shortString = function(str,num){
	if (typeof str ==='string'&& typeof num==='number'){
		if (str.length > num){
		return str.substring(0,num-3)+'...'
		}
		else return str
	}
	else console.log('Один/оба из переданных параметров не сооотвествуют типам строка и число')

}

console.log(shortString('jhhuhjhhj',3))
console.log(shortString('jhhuhjhhj',5))
console.log(shortString('jhhuhjhhj',7))