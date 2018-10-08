function MyFunc1 (n){
	var type1 = typeof n
if (type1 === "number")
    {return "number";
    }
     else if (type1 === "string")
	 {return "string";
	 	 }	
		else {
		return "undefined";
		}
        }
        module.exports = MyFunc1