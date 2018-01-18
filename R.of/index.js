'use strict'
const R = require('ramda')

//Returns a singleton array containing the value provided.
// Возвращает массив из одного элемента, переданного в аргументе.

R.of(null) //=> [null]
R.of([42]) //=> [[42]]
R.of({}) // => [{}]
