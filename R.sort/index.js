'use strict'
const R = require('ramda')

//Returns a copy of the list, sorted according to the comparator function, which should accept two values at a time and return a negative number if the first value is smaller, a positive number if it's larger, and zero if they are equal.
// Возвращает копию массива, отсортированного согласно переданной функции сравнения.
var diff = function(a, b) {
  return a - b
}

R.sort(diff, [4, 2, 7, 5]) //=> [2, 4, 5, 7]);
R.sort(R.descend(R.identity), [4, 2, 7, 5]) //=> [7, 5, 4, 2]);
