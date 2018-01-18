'use strict'
const R = require('ramda')

//Returns true if its arguments are equivalent, false otherwise. Handles cyclical data structures.
// Возвращает true, если оба переданных аргумента эквивалентны.

R.equals(1, 1) //=> true
R.equals(1, '1') //=> false
R.equals([1, 2, 3], [1, 2, 3]) //=> true

var a = {}
a.v = a
var b = {}
b.v = b
R.equals(a, b) //=> true

console.log(R.equals(1, 1))
