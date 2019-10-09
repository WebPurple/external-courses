obj = Object.create();
function searchProp(a, obj) {
  let x = Object.keys(obj) ;
  for (let i = 0; i < x.length; i++) {
    if ( x[i] === a) { 
       console.log(a);
    }
  } return
};
module.exports = searchProp