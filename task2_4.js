function Twins(Comp) {
  if (typeof Comp[0] === 'string' && typeof Comp[1] === 'string' && typeof Comp[2] === 'string') {
    console.log('true');
  } else {
    console.log('false');
  }
}
const SameMass = ['name', 'name', 'name'];
Twins(SameMass);
const UltraMass = [9, NaN, 'Liza'];
Twins(UltraMass);
