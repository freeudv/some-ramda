'use strict'
const R = require('ramda')

//Tests the final argument by passing it to the given predicate function.
//If the predicate is satisfied, the function will return the result of calling the whenTrueFn function with the same argument.
//If the predicate is not satisfied, the argument is returned as is.
//Принимает первым аргументом predicate и если он выполнется, вызывает вторую функцию.
// Если predicate не выполняется, возвращает данные как есть.
// Передает данные первым аргументом в каждую функцию.
// R.when(
//   (data) => true,
//   (data) => ...
// )(data)

// truncate :: String -> String
var truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.compose(R.join(''), R.append('…'), R.take(10))
)

truncate('12345') //=> '12345'
truncate('0123456789ABC') //=> '0123456789…'
