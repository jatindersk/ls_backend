function foo(func) {
  func();
}

let person = {
  name: 'Jatinder',
  age: 30,
  printInfo: function() {
    [1, 2, 3].forEach(function(el) {
      console.log(`${el}. My name is ${this.name} and age is ${this.age}.`);
    }, this);
  }
};

person.printInfo();