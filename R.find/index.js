'use strict'
const R = require('ramda')

//Returns the first element of the list which matches the predicate, or undefined if no element matches.
//Dispatches to the find method of the second argument, if present.
//Acts as a transducer if a transformer is given in list position.
//Возвращает превый найденный элемент в массиве, который совпадает с функцией predicate или undefined, если нет совпадений.

let xs = [{ a: 1 }, { a: 2 }, { a: 3 }]
R.find(R.propEq('a', 2))(xs) //=> {a: 2}
R.find(R.propEq('a', 4))(xs) //=> undefined

//---------------------------------------------------
let arr = ['1', '2', '3', '4', '5']
let id = '5'

console.log(R.find(R.equals(id))(arr)) // => 5
