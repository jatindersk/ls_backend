function func() {
  return this;
}

let context = func();

console.log(context);

//  It will output global object.
//  The standalone function 'func' will has the global
//  object as it's prototype.
//  The code on line 5 defines a variable 'context' and
//  is initialized to the return value of function 'func'
//  which return a reference to the global object.