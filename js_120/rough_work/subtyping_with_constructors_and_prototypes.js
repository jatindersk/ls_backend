function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} X ${this.width}]`;
};

let rec1 = new Rectangle(10, 5);
console.log(rec1.getArea());
console.log(rec1.toString());

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} X ${this.width}]`;
};

let sqr1 = new Square(5);
console.log(sqr1.getArea());
console.log(sqr1.toString());