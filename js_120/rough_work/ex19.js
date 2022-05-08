// function createObj(classObj) {
//   return new classObj();
// }

// class Foo {
//   sayHi() {
//     console.log(`HI!!!`);
//   }
// }

// let newObj = createObj(Foo);
// console.log(newObj);
// newObj.sayHi();

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  static getDescription() {
    console.log(`A rectangle`);
  }

  static description = `This is a description`;
}

let rec = new Rectangle(10, 5);
console.log(rec.area());
Rectangle.getDescription();
//  Rectangle.description = `This is a description`;
console.log(Rectangle.description);