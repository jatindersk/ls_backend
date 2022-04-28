let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

// let ninjaB = Object.create(ninjaA.constructor);

console.log(ninjaA.constructor === ninjaB.constructor); // => true