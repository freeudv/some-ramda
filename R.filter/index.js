'use strict'
const R = require('ramda')

//Takes a predicate and a Filterable, and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate.
//Filterable objects include plain objects or any object that has a filter method such as Array.
//Dispatches to the filter method of the second argument, if present.
//Acts as a transducer if a transformer is given in list position.

// Принимает predicate и фильтруемый массив/объект и возвращает новый массив/объект из элеметов исходного для которых верен predicate
var isEven = n => n % 2 === 0

R.filter(isEven, [1, 2, 3, 4]) //=> [2, 4]
R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }) //=> {b: 2, d: 4}

//-------------------------------------------------------------
const products = [
  { name: 'Jacket', price: 50, category: 'closes', count: 20 },
  { name: 'Boot', price: 120, category: 'closes', count: 30 },
  { name: 'Iphone', price: 600, category: 'electonics', count: 5 },
  { name: 'Ipad', price: 250, category: 'electonics', count: 10 }
]

R.filter(
  product =>
    product.category === 'closes' && product.count < 50 && product.price < 100
)(products) //Jacket
