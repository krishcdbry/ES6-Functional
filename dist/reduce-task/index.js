'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let data = fs.readFileSync('data.txt');
// console.log(data);  // This actually prints byte information - Normally in computer it contains strings as long list of binary codes so we can sove this by character encoding

var output_1 = _fs2.default.readFileSync('data.txt', 'utf8').trim() // To remove the unnecessary spaces/lines
.split('\n') // Splitting each line to array
.map(function (line) {
  return line.split(' ');
}) // Making the input into a convinent array of objects
.reduce(function (final, line) {
  final[line[0]] = final[line[0]] || [];
  final[line[0]].push({
    type: line[1],
    name: line[2],
    price: line[3]
  });
  return final;
}, {});

var output_2 = _fs2.default.readFileSync('data.txt', 'utf8').trim() // To remove the unnecessary spaces/lines
.split('\n') // Splitting each line to array
.map(function (line) {
  return line.split(' ');
}) // Making the input into a convinent array of objects
.reduce(function (final, _ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      shop = _ref2[0],
      type = _ref2[1],
      name = _ref2[2],
      price = _ref2[3];

  final[shop] = final[shop] || [];
  final[shop].push({ type: type, name: name, price: price });
  return final;
}, {});

console.log(JSON.stringify(output_2, null, 2)); // Prints the proper array
console.log(JSON.stringify(output_1, null, 2)); // Prints the proper array