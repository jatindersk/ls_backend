//  There are two ways to specify the execution contexts of a
//  function explicitly:

//  1. call method
//  2. apply method

//  The call method can be used to invoke the function.
//  We can pass the object or null as the first argument to it.
//  The first argument will be the execution context of the function
//  being invoked. If the function accepts an argument or multiple
//  arguments then we can pass those arguments as a comma separated list
//  after the first argument. call(execution context, arg1, arg2, arg3...)

//  The apply method is similar to the call method except for the fact that
//  the arguments supplied to the function being invoked will be in an array
//  instead as a list of comma separated values.
//  apply(execution context, [arg1, arg2, arg3...])