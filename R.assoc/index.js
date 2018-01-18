'use strict'
const R = require('ramda')

//Makes a shallow clone of an object, setting or overriding the specified property with the given value.
//Note that this copies and flattens prototype properties onto the new object as well.
//All non-primitive properties are copied by reference.
// Делает копию объекта и добавляет или заменяет существующее свойство объекта на переданое значение.

const obj = { a: 1, b: 2 }

//Варианты на чистом JS
const newObj = Object.assign({}, obj, { c: 3 }) //=> {a: 1, b: 2, c: 3}
const newObj = { ...obj, c: 3 } //stage-0

//Вариант Ramda
const newObjR = R.assoc('c', 3)(obj) //=> {a: 1, b: 2, c: 3}
