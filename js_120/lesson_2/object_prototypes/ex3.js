let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

//  It will log 4. This is because object qux is a
//  prototype of object baz. Any changes made to the
//  object qux will also be reflected when using object
//  baz to access it's properties.