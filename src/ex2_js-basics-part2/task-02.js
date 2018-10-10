'use strict'
function myArray (arr) {
  var i = 0
  for (i; i < arr.length; i++) {
    console.log(arr[i])
  }
  console.log('Total elements of array: ' + arr.length)
}
module.exports = myArray
