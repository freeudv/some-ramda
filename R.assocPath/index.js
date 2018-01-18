'use strict'
const R = require('ramda')

//Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path.
//Note that this copies and flattens prototype properties onto the new object as well.
//All non-primitive properties are copied by reference.

// Делает копию объекта и добавляет или заменяет существующее свойство объекта  по переданному пути на переданое значение.
// Все непримитивные свойсва копируются по ссылке.

R.assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 } } }) //=> {a: {b: {c: 42}}}

// Any missing or non-object keys in path will be overridden
R.assocPath(['a', 'b', 'c'], 42, { a: 5 }) //=> {a: {b: {c: 42}}}
