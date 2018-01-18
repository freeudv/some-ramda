'use strict'
const R = require('ramda')

//Converts an object into an array of key, value arrays.
//Only the object's own properties are used.
//Note that the order of the output array is not guaranteed to be consistent across different JS platforms.
// Преобразует объект в массивы ключ-значение.

R.toPairs({ a: 1, b: 2, c: 3 }) //=> [['a', 1], ['b', 2], ['c', 3]]
