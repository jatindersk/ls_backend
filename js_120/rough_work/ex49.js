let qux = { foo: 1 };
let baz = Object.create(qux);

console.log(baz.foo + qux.foo);
//  2

//  On line 2 we create an object that inherits from
//  object qux and assign it to variable baz.
//  On line 4, baz delegates the foo property access to
//  it's prototype qux. Thus baz.foo evaluates to 1.
//  qux.foo also evaluates to 1 as we are simply accessing
//  the foo property on object qux.

//  Thus the expression baz.foo + qux.foo evaluates to 1 + 1
//  and console.log method outputs 2 to the console.