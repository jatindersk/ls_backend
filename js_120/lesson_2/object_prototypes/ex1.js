let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo); //  2

//  It will log 2 to the console. This is because object qux
//  is a prototype of object baz. Thus, object baz has access
//  to all the properties and methods on qux.
//  Hence, the expression baz.foo + qux.foo will evaluate to
//  1 + 1