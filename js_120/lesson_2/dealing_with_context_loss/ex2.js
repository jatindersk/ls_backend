let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
      + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);    // Christopher Turk is a Surgeon.

//  This is because when the method getDescription's copy is passed to
//  the logReturnVal function, it looses it's context. On line 12, the function
//  func is being invoked as a standalone function and thus it's execution
//  context will be the global object.