'use strict'
const R = require('ramda')

//Adds together all the elements of a list.
//Складывает все элементы массива приводя их к number.

R.sum([2, 4, 6, 8, 100, 1]) //=> 121
R.sum([1, '2', 3]) //=> 6 - typeof nubmer
R.sum([2, 'a', 1]) //=> NaN
