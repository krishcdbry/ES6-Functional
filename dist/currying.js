
/*

It is almost like a closure. A function which doesnt take all argumetns at once, Instead it takes one by one.
Like :  It returns a function for the first argument -> And then keep of returing new function and for the final arguments it returns the value

*/

// example


// Normal way

let fun = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
};

// Currying Scenario - 1
let fun_1 = arg1 => {

  let fun_2 = arg2 => {

    let fun_3 = arg3 => {

      return arg1 + arg2 + arg3; // Returns the final value
    };

    return fun_3; // Returning function
  };
  return fun_2; // Returning function
};

console.log(fun(1, 2, 3));
console.log(fun_1(1)(2)(3));

// Currying scenario 2

let fun_new = arg1 => arg2 => arg3 => arg1 + arg2 + arg3;

console.log(fun_new(5)(6)(7));

// We can also use _.curry function from loadash which will makes functions into curry functions

var employee = [{ 'name': 'krish', 'age': 24 }, { 'name': 'cdbry', 'age': 25 }, { 'name': 'mohana', 'age': 34 }, { 'name': 'krishna', 'age': 18 }];

let filterAge = (age, x) => x.age < age; // Another small function to check

var newEmp = employee.filter(x => filterAge(30, x)); // Will print 3 employees

//console.log(newEmp);


// Now will make it currying

let filterCurryAge = age => x => x.age < age; // Another small function to check

var newEmp = employee.filter(filterCurryAge(30)); // Will print 3 employees

console.log(newEmp);

// More ES6 Way with spread operator - When you don't know the number of inputs
let ES6_fun = (...args) => {
  return args.reduce((a, b) => a + b);
};

console.log(ES6_fun(1, 2, 4, 4, 5));