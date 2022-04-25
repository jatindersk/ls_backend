let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

//  It will not log anything to the console.
//  This is because the bind method returns a
//  new function whose execution context is
//  permanently set to the object passed in as
//  first argument to the bind method.