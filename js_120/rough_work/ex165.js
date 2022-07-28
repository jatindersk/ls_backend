// // let RECTANGLE = {
// //   area: function() {
// //     return this.width * this.height;
// //   },
// //   perimeter: function() {
// //     return 2 * (this.width + this.height);
// //   },
// // };

// // function Rectangle(width, height) {
// //   this.width = width;
// //   this.height = height;
// //   this.area = RECTANGLE.area.call(this);
// //   this.perimeter = RECTANGLE.perimeter.call(this);
// // }

// // let rect1 = new Rectangle(2, 3);

// // console.log(rect1.area);
// // console.log(rect1.perimeter);

// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor) // => true