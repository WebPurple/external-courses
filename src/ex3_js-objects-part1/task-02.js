// Задание 2
function showKey(object) {
  Object.entries(object).forEach((e) => console.log(`${e[0]} : ${e[1]}`));

  return undefined;
}

module.export = showKey();
