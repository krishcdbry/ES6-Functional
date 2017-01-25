'use strict';

/*

A stream is a flow of values that will be arriving whenever they feel like

*/

var fs = require('fs');
var highland = require('highland');

highland(fs.createReadStream('data/stream.csv', 'utf8')).split('\n').map(function (line) {
  return line.split(' ');
}).map(function (parts) {
  return {
    name: parts[0],
    count: parts[1]
  };
}).filter(function (final) {
  return final.count > 1;
}).map(function (name) {
  return name.name;
}).each(function (x) {
  console.log(x);
});

// And also the keyboard, mouse inputs can be streamed as events