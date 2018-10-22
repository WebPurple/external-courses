//js_task12__Isaev_Arsenyi

max1=3;
min1=-10;

function randomInt(min, max) {
    var rand = min - 0.5 + Math.random() * (1 + max - min)
    rand = Math.round(rand);
    return rand;
  }

  console.log(randomInt(min1, max1));


module.exports = randomInt;