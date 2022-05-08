// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.area = function() {
//   return this.length * this.width;
// };

// let rec = new Rectangle(15, 10);
// console.log(typeof Rectangle);
// console.log(rec instanceof Rectangle);
// console.log(rec.constructor);
// console.log(rec.area());

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);
console.log(rec.area());
console.log(rec instanceof Rectangle);
console.log(rec.constructor);