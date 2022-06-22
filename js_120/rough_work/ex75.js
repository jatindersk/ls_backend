function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

// Object.setPrototypeOf(ninja, Ninja.prototype);

console.log(ninja.swingSword());  //  true