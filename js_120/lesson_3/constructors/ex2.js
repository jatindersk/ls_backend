function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // type error: undefined is not an object

//  It will raise an exception. This is because the constructor
//  Lizard is invoked without a `new` operator and thus it gets
//  invoked as a regular function.

//  As function Lizard doesn't have an explicit return, it will
//  implicitly return undefined.
//  Thus, the variable `lizzy` gets assigned the value undefined.