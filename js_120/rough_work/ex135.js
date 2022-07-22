function bar(func) {
  func();
}


function foo() {
  let person = {
    name: 'jatinder',
    age: 30,
    printInfo: function() {
      console.log(`My name is ${this.name} and age is ${this.age}.`);
    }
  };

  bar(person.printInfo.bind(person));
}

foo();

//  External libraries don't usually allow us to
//  supply arguments to functions or modify them.
//  In general the more the number of arguments a function
//  accepts, the more difficult it is to read and understand it.