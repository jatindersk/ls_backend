function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

let hello = new Hello();
hello.hi();

//  The code will output 'Hello!'.
//  The instance of Hello constructor hello
//  invokes method `hi` in it's constructor's
//  prototype.

//  The method `hi` in the prorotype chain of
//  object `hello` invokes method `greet` from the
//  prototypal chain of constructor `Hello`
//  The greet method then logs the string passed to
//  it as an argument.