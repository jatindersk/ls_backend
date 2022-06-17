let qux = {
  galaxy: 'Milky Way'
};

let foo = {
  name: 'Aaron',
  age: 40
};

Object.setPrototypeOf(foo, qux);

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});