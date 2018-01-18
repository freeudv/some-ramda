'use strict'
const R = require('ramda')

//A special placeholder value used to specify "gaps" within curried functions, allowing partial application of any combination of arguments, regardless of their positions.
//Специальная функция - placeholder. Нужна для работы с каррированными функциями, когда мы хотим оставить пропуск для прокидываемого автоматически аргумента

//If g is a curried ternary function and _ is R.__, the following are equivalent:
// g(1, 2, 3)
// g(_, 2, 3)(1)
// g(_, _, 3)(1)(2)
// g(_, _, 3)(1, 2)
// g(_, 2, _)(1, 3)
// g(_, 2)(1)(3)
// g(_, 2)(1, 3)
// g(_, 2)(_, 3)(1)

const greet = R.replace('{name}', R.__, 'Hello, {name}!')

greet('Alice') //=> 'Hello, Alice!'
