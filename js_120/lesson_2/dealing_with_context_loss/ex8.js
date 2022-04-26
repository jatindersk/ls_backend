let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
console.log(Object.a);

//  The value of `foo.a` will be 0 after the code runs.
//  This is because the `increment` function on line 8
//  being invoked as a standalone function. Hence, it's
//  execution context will be the global object.


//  -------------TRASH BELOW--------------------------------

//  The code on line 5 will create a new property by the
//  name `a' and assign it a value of 1 on the first
//  invocation of `incrementA` function.
//  The subsequent invocations of `incrementA` function
//  will keep increment the value of newly created property
//  `a` in the global object by 1.