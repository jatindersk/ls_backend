let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => this.name + ' ' + number);
  },
};

console.log(franchise.allMovies());

//  The value of this inside a nested function such as the
//  callback in map method on line 5 looses context.
//  Hence, this points to the global object instead of the
//  object that invoked the function.

//  We can fix this issue by using arrow function. The context
//  within an arrow function is always the surrounding context.
//  In this case the context of callback will be the context of
//  outer function i.e map. Hence, this will refer to the object
//  that called the method.