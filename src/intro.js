/*

 In JavaScript functions are first class citizens.
 In JavaScript functions are values.

 */

// Example

function jsFun () {
  return "Hey I am a function";
}

// Also this function can be assigned to value as a anonymous function

var jsFun = function () {
  return "Hey I am a function but assigned to a variable"
}

// Proper example about using this

var add = function (num) {
   return num+2;
}

var another_Add = add;

another_Add(5);  // Returns 7
