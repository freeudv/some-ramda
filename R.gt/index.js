'use strict'
const R = require('ramda')

// Greater than
//Returns true if the first argument is greater than the second; false otherwise.
// Возвращает true, если первый аргумент больше второго. Иначе false.

R.gt(2, 1) //=> true
R.gt(2, 2) //=> false
R.gt(2, 3) //=> false
R.gt('a', 'z') //=> false
R.gt('z', 'a') //=> true
