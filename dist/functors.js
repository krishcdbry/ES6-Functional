/*

A functor is an object that has a map method.

 Arrays in JavaScript implement map and are therefore functors.

 Promises, Streams and Trees often implement map in functional languages,
 and when they do, they are considered functors.

 The map method of the functor takes it’s own contents and transforms each of them using the transformation callback passed to map,
 and returns a new functor, which contains the structure as the first functor, but with the transformed values.

*/

// example

let addOne = value => {
  return value + 1;
};

// ES6 Way

// Adding 1 to every element - Mean   1,2  ==> 2,3
let plus1 = value => value + 1;

// Substracting 1 to every element - Mean   2,3  ==> 1,2
let minus1 = value => value - 1;

// Getting next alphabet - abc ==> bcd
let nextLetter = value => {
  return String.fromCharCode(value.charCodeAt(0) + 1);
};
// Using functor

console.log([5, 6].map(plus1)); // [6,7]

console.log("abc".split('').map(nextLetter).join("")); //  ["b", "c", "d"]


// Now Another functor

// This functor => function + constructor | This is taking the data and also the function need to be applied
let stringFunctor = (data, fun) => {
  return data.split("").map(char => {
    return String.fromCharCode(fun(char.charCodeAt(0)));
  }).join("");
};

console.log(stringFunctor("KRISHCDBRY", plus1));
console.log(stringFunctor("KRISHCDBRY", minus1));

console.log(stringFunctor);

var promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve({
      "name": "krishcdbry",
      "salary": "$135k"
    });
  }, 1000);
});

var yesPromise = promise.map(x => x.name).then(res => {
  console.log(res);
});