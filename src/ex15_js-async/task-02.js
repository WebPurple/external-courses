const search = document.getElementById('search');
const text = document.getElementById('text');

const time = 500;
const mockArray = [
  '123',
  '234',
  '312',
  'red',
  'rad',
  'black',
  'blur',
  'green',
  'glass',
];

console.log(mockArray);

function searchItem(...rest) {
  const searchValue = search.value;
  mockArray.forEach((item) => {
    if (item.includes(searchValue) && item[0] === searchValue[0]) {
      text.value = item;
    }
  });
  if (!searchValue) {
    text.value = null;
  }
  console.log(rest);
}

function debounce(callback) {
  let isRunning;

  return (...rest) => {
    clearTimeout(isRunning);
    isRunning = setTimeout(() => {
      callback.apply(this, ...rest);
    }, time);
  };
}

search.addEventListener('input', debounce(searchItem));
