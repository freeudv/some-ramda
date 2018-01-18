'use strict'
const R = require('ramda')

//Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.
// Выполняет переданные функции справа налево. Первая функция может принимать любое количество аргументов, остальные должны быть унарными.

var classyGreeting = (firstName, lastName) =>
  "The name's " + lastName + ', ' + firstName + ' ' + lastName
var yellGreeting = R.compose(R.toUpper, classyGreeting)
yellGreeting('James', 'Bond') //=> "THE NAME'S BOND, JAMES BOND"

R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
