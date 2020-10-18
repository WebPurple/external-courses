function sumElements(array) {
  let sum = 0;

  for (let elem of array){
    sum += elem;
    console.log(elem);
  }

  console.log(sum);

  return;
}

module.exports = sumElements;
