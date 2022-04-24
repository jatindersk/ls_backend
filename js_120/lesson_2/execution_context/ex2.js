let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);

//  It will output the object 'obj'.
//  The code on line 7 declareas a variable named 'context' and
//  assigns a reference to object 'obj'. This is because the
//  we use 'method call syntax' which implies that when calling
//  a method the 'execution context' is implicitly set to the object
//  that contains the method.

//  It is different from ex1 with respect to the value of execution context.
//  In ex1 the execution context was the global object while in this example
//  the execution context is the object that contains the method.
//  This is because in example 1, we were calling the function as a standalone
//  function while here we are calling the function as a method i.e a property
//  of the object 'obj'.