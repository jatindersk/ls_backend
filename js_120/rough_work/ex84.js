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

Hello.hi();   //  TypeErro

// let hello = new Hello();
// hello.greet('Goodbye');   //  Goodbye

// let hello = new Hello();
// hello.greet();  //  undefined

// let hello = new Hello();
// hello.hi();   //  Hello!

// let hello = new Hello();
// hello.bye();  //  TypeError