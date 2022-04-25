//  We can use the bind method to permanently bind the execution context of
//  a function to a particular execution context.

let another = {
  name: 'kavish',
  pets: 'parrot',
};

let foo = {
  name: 'jatinder',
  pets: 'dog',
  message: function() {
    console.log(`${this.name} has a ${this.pets}.`);
  },
};

foo.message.call(another);
let bar = foo.message.bind(foo);
bar();