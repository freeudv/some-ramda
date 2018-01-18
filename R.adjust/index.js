'use strict'
const R = require('ramda')

//Applies a function to the value at the given index of an array, returning a new copy of the array with the element at the given index replaced with the result of the function application.
// Применяет функцию к значению переданного элемента массива и возвращает новый массив с новым значением этого элемента.

R.adjust(R.add(10), 1, [1, 2, 3]) //=> [1, 12, 3]
R.adjust(R.add(10))(1)([1, 2, 3]) //=> [1, 12, 3]
