'use strict'
const R = require('ramda')

//A function wrapping calls to the two functions in an || operation, returning the result of the first function if it is truth-y and the result of the second function otherwise. Note that this is short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
//Принимает две функции и возвращает новую функцию, которая возвращает true если одна из функции возвращают true

var test = R.either(value => value > 10, value => value % 2 === 0)
test(101) //=> true
test(8) //=> true
