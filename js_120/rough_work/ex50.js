let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);
//  3

//  On line 3, we are assigning a property named foo to
//  the object baz. Incase of property assignment, JS
//  treats the property as an 'own' property of the object
//  named to the left of property name.

//  It won't mutate the property on object qux.
//  Thus the expression baz.foo + qux.foo evaluates to 2 + 1
//  and the output is 3.