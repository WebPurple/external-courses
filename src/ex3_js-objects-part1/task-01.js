"use strict"

function createObj() {
  let obj = {};
  console.log(obj);

  obj.a = "i'm string";
  obj.b = 1;
  console.log(obj);
  
  delete obj.b;
  console.log(obj);
}
