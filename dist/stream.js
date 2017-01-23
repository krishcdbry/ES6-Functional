/*

A stream is a flow of values that will be arriving whenever they feel like

*/

const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('data/stream.csv', 'utf8')).split('\n').map(line => line.split(' ')).map(parts => ({
  name: parts[0],
  count: parts[1]
})).filter(final => final.count > 1).map(name => name.name).each(x => {
  console.log(x);
});

// And also the keyboard, mouse inputs can be streamed as events