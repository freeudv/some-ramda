'use strict'
const R = require('ramda')

//Returns whether or not an object has an own property with the specified name.
// Возвращает true если объект имеет свойство с определенным именем.

var hasName = R.has('name')
hasName({ name: 'alice' }) //=> true
hasName({ name: 'bob' }) //=> true
hasName({}) //=> false

var point = { x: 0, y: 0 }
var pointHas = R.has(R.__, point)
pointHas('x') //=> true
pointHas('y') //=> true
pointHas('z') //=> false
