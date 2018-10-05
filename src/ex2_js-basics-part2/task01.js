var taskOne = function(x) {
    if (typeof x === 'string') {
        console.log('string');}
    else if (typeof x === 'number') {
    console.log('number')}
    else {console.log('undefined')}
}

taskOne(true);
taskOne(1);
taskOne('1');
taskOne(undefined);

