'use strict'
const R = require('ramda')

//Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value.
// Сеттер для свойства переданной линзы. Возвращает новый объект

const xLens = R.lensProp('x')

R.set(xLens, 4, { x: 1, y: 2 }) //=> {x: 4, y: 2}
R.set(xLens, 8, { x: 1, y: 2 }) //=> {x: 8, y: 2}

//-----------------------------------------

const user = { name: 'John', surname: 'Flint' }

const nameLins = R.lensProp('name')

R.set(nameLins, 'Alex', user) // => Alex
