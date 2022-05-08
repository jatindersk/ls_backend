let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = {};
ninjaB.constructor = ninjaA.constructor;

console.log(ninjaA.constructor === ninjaB.constructor); // => true