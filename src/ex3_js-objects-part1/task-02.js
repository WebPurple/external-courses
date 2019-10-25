function displayObj(obj){
    for (let key in obj){
        console.log (obj.key+" = "+obj[key])
    }
}
module.exports = displayObj;