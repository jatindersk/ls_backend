class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  toString() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = 'Square';
  }

  toString() {
    return `[Square ${this.length} x ${this.width}]`;
  }
}

let square = new Square(9);
let rectangle = new Rectangle(10, 6);

console.log(square.toString());
console.log(square.getArea());
console.log(rectangle.toString());
console.log(rectangle.getArea());