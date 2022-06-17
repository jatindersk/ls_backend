let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);
// 4

//  On line 3, our code updates the value of
//  foo property on object qux.
//  Thus baz.foo + qux.foo evaluates to 2 + 2
//  Thus the output will be 4.