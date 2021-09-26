function Sorting(something) {
  if (typeof something === 'string') {
    console.log('string');
  }
  if (typeof something === 'number' && !isNaN(something)) {
    console.log('number');
  }
  if (isNaN(something)) {
    console.log('undefined');
  } else {
    console.log('undefined');
  }
}
Sorting('щ');
Sorting(8);
Sorting(NaN);
Sorting(undefined);
