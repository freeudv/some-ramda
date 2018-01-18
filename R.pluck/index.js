'use strict'
const R = require('ramda')

//Returns a new list by plucking the same named property off all objects in the list supplied.
//pluck will work on any functor in addition to arrays, as it is equivalent to R.map(R.prop(k), f).
// Возвращает новый массив/объект значений указанного свойства объектов в переданном массиве/объекте
//аналогично R.map(R.prop(k), f)
R.pluck('a')([{ a: 1 }, { a: 2 }]) //=> [1, 2]
R.pluck(0)([[1, 2], [3, 4]]) //=> [1, 3]
R.pluck('val', { a: { val: 3 }, b: { val: 5 } }) //=> {a: 3, b: 5}

//---------------------------------------------------------------
const products = [
  { name: 'Jacket', price: 50, category: 'closes', count: 20 },
  { name: 'Boot', price: 120, category: 'closes', count: 30 },
  { name: 'Iphone', price: 600, category: 'electonics', count: 5 },
  { name: 'Ipad', price: 250, category: 'electonics', count: 10 }
]

//Вариант на чистом JS
const getProductNames = products => products.map(product => product.name)
console.log(getProductNames(products)) //[ 'Jacket', 'Boot', 'Iphone', 'Ipad' ]

//Вариант Ramda
const getProductByProp = prop => R.pluck(prop)
const getProductByName = getProductByProp('name')

getProductByName(products) //[ 'Jacket', 'Boot', 'Iphone', 'Ipad' ]
