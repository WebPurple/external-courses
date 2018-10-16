var celebrity = {
    name: "Tsoy",
    isAlive: true
}
var key;
var clone = {};

function cloneCelebrity() {
for (key in celebrity) {
    clone[key] = celebrity[key];
}

console.log(clone);
return clone;
};

cloneCelebrity(celebrity);