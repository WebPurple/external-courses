function countSymbols(str) {
  let result = {};
  let symbols = str.split("");
  for (let i = 0; i < symbols.length; i++) {
    let count = result[symbols[i]] ? result[symbols[i]] : 0;
    result[symbols[i]] = count + 1;
  }
  for (let key in result) {
    console.log(`Символ: ${key}, повторения ${result[key]}`);
  }
}
module.exports = countSymbols