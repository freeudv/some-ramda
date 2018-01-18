'use strict'
const R = require('ramda')

// Less than
//Returns true if the first argument is less than the second; false otherwise.
//Возвращает true, если первый аргумент меньше второго. Иначе false.

R.lt(2, 1) //=> false
R.lt(2, 2) //=> false
R.lt(2, 3) //=> true
R.lt('a', 'z') //=> true
R.lt('z', 'a') //=> false
