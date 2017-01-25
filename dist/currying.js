'use strict';

/*

It is almost like a closure. A function which doesnt take all argumetns at once, Instead it takes one by one.
Like :  It returns a function for the first argument -> And then keep of returing new function and for the final arguments it returns the value

*/

// example


// Normal way

var fun = function fun(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
};

// Currying Scenario - 1
var fun_1 = function fun_1(arg1) {

  var fun_2 = function fun_2(arg2) {

    var fun_3 = function fun_3(arg3) {

      return arg1 + arg2 + arg3; // Returns the final value
    };

    return fun_3; // Returning function
  };
  return fun_2; // Returning function
};

console.log(fun(1, 2, 3));
console.log(fun_1(1)(2)(3));

// Currying scenario 2

var fun_new = function fun_new(arg1) {
  return function (arg2) {
    return function (arg3) {
      return arg1 + arg2 + arg3;
    };
  };
};

console.log(fun_new(5)(6)(7));

// We can also use _.curry function from loadash which will makes functions into curry functions

var employee = [{ 'name': 'krish', 'age': 24 }, { 'name': 'cdbry', 'age': 25 }, { 'name': 'mohana', 'age': 34 }, { 'name': 'krishna', 'age': 18 }];

var filterAge = function filterAge(age, x) {
  return x.age < age;
}; // Another small function to check

var newEmp = employee.filter(function (x) {
  return filterAge(30, x);
}); // Will print 3 employees

//console.log(newEmp);


// Now will make it currying

var filterCurryAge = function filterCurryAge(age) {
  return function (x) {
    return x.age < age;
  };
}; // Another small function to check

var newEmp = employee.filter(filterCurryAge(30)); // Will print 3 employees

console.log(newEmp);

// More ES6 Way with spread operator - When you don't know the number of inputs
var ES6_fun = function ES6_fun() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  });
};

console.log(ES6_fun(1, 2, 4, 4, 5));