'use strict'
const R = require('ramda')

//Returns the result of concatenating the given lists or strings.
//Note: R.concat expects both arguments to be of the same type, unlike the native Array.prototype.concat method. It will throw an error if you concat an Array with a non-Array value.
//Dispatches to the concat method of the first argument, if present.

// Возвращает результат объединения двух строк или массивов.
// Оба аргуметна должны быть одного типа, иначе буде ошибка.
R.concat('ABC', 'DEF') // 'ABCDEF'
R.concat([4, 5, 6], [1, 2, 3]) //=> [4, 5, 6, 1, 2, 3]
R.concat([[4, 5], [6, 7]], [1, 2, 3]) // => [ [ 4, 5 ], [ 6, 7 ], 1, 2, 3 ]
R.concat([], []) //=> []

const concat = R.concat()
const firstString = concat('abc')
const secondString = firstString('def') //// abcdef
