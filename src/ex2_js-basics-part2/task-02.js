function find(mas) {
  let count = 0;
  const massive = JSON.stringify(mas);
  JSON.parse(massive).forEach((elem) => {
    count += 1;
    console.log(elem);
  });
  console.log(count);
  return count;
}

module.exports = find;
