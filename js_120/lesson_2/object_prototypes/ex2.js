let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo); // 3

//  It will log 3 to the console. This is because baz has no
//  'own' property names as 'foo'. Thus on line 3, JavaScript
//  treats 'foo' as 'own' property of the object whose name is
//  present to the left of property name i.e 'baz'. Thus it creates
//  an 'own' property in object baz named 'foo' and sets it's value
//  to 2