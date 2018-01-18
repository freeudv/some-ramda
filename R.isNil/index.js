'use strict'
const R = require('ramda')

//Checks if the input value is null or undefined.
// Проверяет переданный аргумент на null или undefined/

R.isNil(null) //=> true
R.isNil(undefined) //=> true
R.isNil(0) //=> false
R.isNil([]) //=> false
