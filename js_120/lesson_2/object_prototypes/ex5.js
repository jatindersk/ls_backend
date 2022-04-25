let qux = { name: 'jatinder' };

let foo = Object.create(qux);
foo.pets = 'a dog';

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

//  No they won't always log the same results.
//  The for in loop iterates over the object's
//  prototype's properties as well.

//  Whereas the Object.keys method returns an
//  array of keys of caller object's 'own' keys
//  i.e the properties which are defined by caller
//  object itself.

//  So in the case where we make the caller object explicitly
//  inherit from another arbitrary object, the two loops will
//  produce a different output.