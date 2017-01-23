

/*

 Map is something different to it returns the same number of items
 which it receives by creating a new array

*/

const employees = [{ "name": "krishcdbry", "dept": "software", "exp": 5 }, { "name": "krishcdbry", "dept": "mechanical", "exp": 2 }, { "name": "krishcdbry", "dept": "sales", "exp": 9 }, { "name": "krishcdbry", "dept": "software", "exp": 7 }, { "name": "krishcdbry", "dept": "software", "exp": 1 }, { "name": "krishcdbry", "dept": "sales", "exp": 2 }, { "name": "krishcdbry", "dept": "software", "exp": 3 }];

// Same example - Want to create an array

// traditional way
let newEmp = [];
for (let employee of employees) {
  newEmp.push(employee.name + " belongs to  " + employee.dept);
}

console.log(newEmp);

// Functional way
let newEmpl_fun = employees.map(employee => {
  return employee.name + " belongs to  " + employee.dept;
});

console.log(newEmpl_fun);

// More minimal way

let newEmpl_fun_min = employees.map(employee => employee.name + " belongs to  " + employee.dept);

console.log(newEmpl_fun_min);