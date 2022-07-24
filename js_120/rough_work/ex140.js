let bar = { barProp: 'bar obj' };

let foo = Object.create(bar);
foo.fooProp = 'foo object';

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

let noProto = Object.create(null);
console.log(Object.getPrototypeOf(noProto) === null);