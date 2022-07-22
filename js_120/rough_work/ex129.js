class Foo {
  sayBye() {
    console.log('Bye!');
  }
}

function test(classDec) {
  return new classDec();
}

let obj = test(Foo);
obj.sayBye();

console.log(String.length);
console.log('jat'.length);

console.log(Foo.prototype.constructor.name);