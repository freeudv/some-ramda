'use strict'
const R = require('ramda')

//Returns a new list without values in the first argument. R.equals is used to determine equality.
//Acts as a transducer if a transformer is given in list position.
// Возвращает новый массив без элементов, переданных в массиве первым аргументом.

R.without([1, 2], [1, 2, 1, 3, 4]) //=> [3, 4]
