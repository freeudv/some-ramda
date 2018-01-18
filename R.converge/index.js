'use strict'
const R = require('ramda')

//Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

// Вызывает несколько разных функций на один аргумент, и затем применяет результирующую функцию на результат этих функций.
//Принимает результирующую функцию и массив функции для аргумента.

var average = R.converge(R.divide, [R.sum, R.length])
average([1, 2, 3, 4, 5, 6, 7]) //=> 4

var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
strangeConcat('Yodel') //=> "YODELyodel"

//--------------------------------------------------------
// Проверим, является ли первый элемент массива наибольшим значением.
const validArr = [6, 3, 4, 5, 2]
const notValidArr = [3, 4, 6, 1]

// Вариант на JS
const firstElementBiggest = array => array[0] === array.sort((a, b) => b - a)[0] // + мутация исходного массива
firstElementBiggest(validArr) //true
firstElementBiggest(notValidArr) //false

//Вариант Ramda
const sortByBiggestFirst = R.sort(R.descend(R.identity))

const firstElementBiggestR = R.converge(R.equals, [
  R.head,
  R.compose(R.head, sortByBiggestFirst)
])

firstElementBiggestR(validArr) //true
firstElementBiggestR(notValidArr) //false
