// You have recently watched Lion King as well as Jungle Book and have decided to take the best
// of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, Lions have two characteristics:
// 1) they are friendly;
// 2) they are in the Lion King
// Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

// Tigers, likewise, have two characteristics:
// 1) they enjoy swimming;
// 2) they are in the Jungle Book
// Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

// Your task, should you chose to accept it, is to create a Liger (https://en.wikipedia.org/wiki/Liger).
// A Liger is an animal whose father is a Lion and whose mother is a Tiger. 
// The liger you create should inherit ALL properties and functionality from its parents, as follows:

function Lion() {}

Lion.prototype.isFriendly = true;
Lion.prototype.inLionKing = true;
Lion.prototype.roar = function() {
  return `Hakuna Matata`;
};

function Tiger() {}

Tiger.prototype.enjoysSwimming = true;
Tiger.prototype.inJungleBook = true;
Tiger.prototype.chase = function() {
  return `I am chasing the man-cub`;
};

function Liger() {}
Liger.prototype = Object.create(Object.assign({}, Lion.prototype, Tiger.prototype));

// Since isFriendly, inLionKing, roar properties are common for all Lions in our
// problem and not specific to a particular instance of Lion, we can define these
// properties in the prototype object of Lion constructor function object.

// Same can be said for the Tiger type and for enjoysSwimming, inJungleBook, and chase
// properties.

// Now, since the Liger instances must inherit the properties and methods of Lion and
// Tiger class, we assigned the Liger.prototype to reference and object that inherits
// from an object containing the copies of all the properties and methods defined
// on prototypes of Lion and Tiger classes respectively.

let liger = new Liger();

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true