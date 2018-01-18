'use strict'
const R = require('ramda')

//Returns a list of all the enumerable own properties of the supplied object.
//Note that the order of the output array is not guaranteed across different JS platforms.
//Возвращает массив значений всех перечислимых свойств объекта

R.values({ a: 1, b: 2, c: 3 }) //=> [1, 2, 3]
