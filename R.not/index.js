'use strict'
const R = require('ramda')

//A function that returns the ! of its argument.
//It will return true when passed false-y value, and false when passed a truth-y one.
// Функция, которая возвращает ! от своего аргумента(if true -> false, if false -> true).

R.not(true) //=> false
R.not(false) //=> true
R.not(0) //=> true
R.not(1) //=> false
R.not('') //=> true
R.not({}) //=> false
