/*

Higher order functions are predefined javascript functions
and we can acheive functional programming by writing small
functions and composing them with higher order functions

*/

// Exampel

const employees = [{ "name": "krishcdbry", "dept": "software", "exp": 5 }, { "name": "krishcdbry", "dept": "mechanical", "exp": 2 }, { "name": "krishcdbry", "dept": "sales", "exp": 9 }, { "name": "krishcdbry", "dept": "software", "exp": 7 }, { "name": "krishcdbry", "dept": "software", "exp": 1 }, { "name": "krishcdbry", "dept": "sales", "exp": 2 }, { "name": "krishcdbry", "dept": "software", "exp": 3 }];

// Now we need to filter employees of department software

// Method 1: In traditional way

let softwareEmployees = [];

for (let employee of employees) {
  if (employee.dept === 'software') {
    softwareEmployees.push(employee);
  }
}

// Now going to Method 2 - Functional programming way
let newSoftwareEmployees = employees.filter(employee => {
  return employee.dept === 'software';
});

console.log(newSoftwareEmployees);

// because of this less bugs and less code !!

/*
Scenario - Even we can make that filter part to another anonymus
and can assign to a variable. So that it can used in other places
*/

// Example

// Software
let filerSoftware = employee => {
  return employee.dept === 'software';
};

// Non software
let nonSoftware = employee => {
  return employee.dept !== 'software';
};

let newSoftwareEmployees_compo = employees.filter(filerSoftware); // Filters

console.log(newSoftwareEmployees_compo);

let nonSoftwareEmployees_compo = employees.filter(nonSoftware); // Filters

console.log(nonSoftwareEmployees_compo);

/**
 This way Higher order functons can be more used for functional programing
**/