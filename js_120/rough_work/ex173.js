function Mammal() {}

Mammal.prototype.breathe = function() {
  console.log('breathe');
}

function Cat() {}
Cat.prototype = Object.create(Mammal.prototype);
Cat.constructor = Cat;

let cat1 = new Cat();
cat1.breathe();