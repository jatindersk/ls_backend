let bar = {
  intro: 'I am proto'
};

let foo = {
  info: 'I am foo'
};

Object.setPrototypeOf(foo, bar);

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});