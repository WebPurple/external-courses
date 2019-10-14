function showPropertyWithValue(obj){
      for(let key in obj){
        if(obj.hasOwnProperty(key)){
          console.log(key +" " +obj[key]);
        }
      }
}

module.exports = showPropertyWithValue;