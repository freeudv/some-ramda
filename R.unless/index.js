'use strict'
const R = require('ramda')

//Tests the final argument by passing it to the given predicate function.
//If the predicate is not satisfied, the function will return the result of calling the whenFalseFn function with the same argument.
//If the predicate is satisfied, the argument is returned as is.

//Принимает первым аргументом predicate и если он не выполнется, вызывает вторую функцию.
// Передает данные первым аргументом в каждую функцию.
// Если predicate выполняется, возвращает данные как есть.
// R.unless(
//   (data) => false,
//   (data) => ...
// )(data)

let safeInc = R.unless(R.isNil, R.inc)
safeInc(null) //=> null
safeInc(1) //=> 2

// truncate :: String -> String
var truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.compose(R.join(''), R.append('…'), R.take(10))
)

truncate('12345') //=> '12345...'
truncate('0123456789ABC') //=> '0123456789
