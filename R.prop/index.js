'use strict'
const R = require('ramda')

//Returns a function that when supplied an object returns the indicated property of that object, if it exists.
// Возвращает функцию, которая возвращает значение свойства объекта
R.prop('x', { x: 100 }) //=> 100
R.prop('x', {}) //=> undefined
