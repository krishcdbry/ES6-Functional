"use strict";

/*

Promises are like a function callbacks but used for countering the async functionalitu of JS,
A way of dealing with things being asynchronous - This is like when we don't have any idea of
what happens when.

Here in JS - Promises are more powerful to make things work better , they can even chain together

*/

// Promise 1 - To know that it is resolved
var promiseOne = new Promise(function (resolve, reject) {
  resolve("Hey");
});

// Promise 2 - Gives the reject function after a timeout
var promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("failed Boss");
  }, 2500);
});

// Enters inside the then function only when the promise 1 is success
promiseOne.then(function (res) {
  console.log(res);
});

promiseTwo.then(function (res) {
  console.log(res); // For success
}, function (err) {
  console.log(err); // For failure
});

// Checking all promises at a time
Promise.all([promiseOne, promiseTwo]).then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
});

// To check the real world API
fetch('https://api.icndb.com/jokes/random/-10').then(function (res) {
  res.json().then(function (data) {
    console.log(data);
  });
}).catch(function (err) {
  console.log(err);
});