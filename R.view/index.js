'use strict'
const R = require('ramda')

//Returns a "view" of the given data structure, determined by the given lens.
//The lens's focus determines which portion of the data structure is visible.
// Геттер для lens. Возвращает данные определенные в переданной линзе.

const xLens = R.lensProp('x')

R.view(xLens, { x: 1, y: 2 }) //=> 1
R.view(xLens, { x: 4, y: 2 }) //=> 4

//-----------------------------------------

const user = { name: 'John', surname: 'Flint' }

const nameLins = R.lensProp('name')

R.view(nameLins, user) // => John
