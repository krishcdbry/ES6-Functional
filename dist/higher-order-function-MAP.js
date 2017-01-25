"use strict";

/*

 Map is something different to it returns the same number of items
 which it receives by creating a new array

*/

var employees = [{ "name": "krishcdbry", "dept": "software", "exp": 5 }, { "name": "krishcdbry", "dept": "mechanical", "exp": 2 }, { "name": "krishcdbry", "dept": "sales", "exp": 9 }, { "name": "krishcdbry", "dept": "software", "exp": 7 }, { "name": "krishcdbry", "dept": "software", "exp": 1 }, { "name": "krishcdbry", "dept": "sales", "exp": 2 }, { "name": "krishcdbry", "dept": "software", "exp": 3 }];

// Same example - Want to create an array

// traditional way
var newEmp = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var employee = _step.value;

    newEmp.push(employee.name + " belongs to  " + employee.dept);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log(newEmp);

// Functional way
var newEmpl_fun = employees.map(function (employee) {
  return employee.name + " belongs to  " + employee.dept;
});

console.log(newEmpl_fun);

// More minimal way

var newEmpl_fun_min = employees.map(function (employee) {
  return employee.name + " belongs to  " + employee.dept;
});

console.log(newEmpl_fun_min);