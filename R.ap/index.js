'use strict'
const R = require('ramda')

// ap applies a list of functions to a list of values.
// Dispatches to the ap method of the second argument, if present. Also treats curried functions as applicatives.
// Применяет массив функций к массиву значений и возвращает новы массив.

R.ap([R.multiply(2), R.add(3)], [1, 2, 3]) //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']) //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]

// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
