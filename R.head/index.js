'use strict'
const R = require('ramda')

//Returns the first element of the given list or string. In some libraries this function is named first.
// Возвращает первый элемент пререданного массива или строки.

R.head(['fi', 'fo', 'fum']) //=> 'fi'
R.head([]) //=> undefined

R.head('abc') //=> 'a'
R.head('') //=> ''
