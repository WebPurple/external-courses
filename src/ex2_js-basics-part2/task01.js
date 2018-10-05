var f = function(a) {
  if (typeof a === "string") {
    console.log("It is a string");
  } else if (typeof a === "number") {
    console.log("It is a number");
  } else {
    console.log("This is undefined");
  }
};

f(102);
f("Yo");
f();
f(0);
f("-15C");
