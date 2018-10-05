var pancake = {
    name: 'vanilla pancake',
    count: 3,
}

console.log(pancake);

pancake.flavour = 'vanilla';
pancake.isProduced = true;
pancake.isDelicious = true;
console.log(pancake);

delete(pancake.isDelicious); //all of them are delicious

console.log(pancake);

