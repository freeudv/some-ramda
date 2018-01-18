'use strict'
const R = require('ramda')

//A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.
// просто оборачивает переменную в функцию. Это нужно тогда, когда следующий метод принимает функцию, а не переменную.
R.identity(1) //=> 1

var obj = {}
R.identity(obj) === obj //=> true
