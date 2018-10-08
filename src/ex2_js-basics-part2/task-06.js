var a;
var p;
p = function (a){
  if ( a > 999){
    console.log("Number > 999, please write correct number")
  }
  else{
  if ( a === 1){
    console.log("Simple number")
  }
  else if ( a === 2 ){
    console.log("Simple number")
  }
  else if ( a===3 ){
    console.log("Simple number")
  }
  else if ( a===5 ){
    console.log("Simple number")
  }
  else if ( a===7){
    console.log("Simple number")
  }
  else {
  if ( a % 2 === 0 ){
    console.log("Summary number");
  }
  else if ( a % 3 === 0 ){
    console.log("Summary number");
  }
  else if ( a % 5 === 0){
    console.log("Summary number");
  }
  else if ( a % 7 === 0){
    console.log("Summary number");
  }
  else if ( typeof a === "string"){
    console.log("Error");
  }
  else {
    console.log("Simple number");
  }
}
}
}
p(1001)
