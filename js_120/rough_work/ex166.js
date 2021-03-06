function User(first, last) {
  if (this instanceof User) {
    this.name = first + ' ' + last;
  } else return new User(first, last);
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

function test() {}

let newObj = new test()

console.log(newObj.constructor.name);
console.log(test.constructor.name);
console.log(test.name);

console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);