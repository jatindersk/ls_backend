class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangel: ${this.length} X ${this.width}]`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  toString() {
    return `[Square: ${this.length} X ${this.width}]`;
  }
}

let sq1 = new Square(5);
console.log(sq1.getArea());
console.log(sq1.toString());

let rec1 = new Rectangle(50, 20);
console.log(rec1.toString());