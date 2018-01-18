'use strict'
const R = require('ramda')

//Returns a lens whose focus is the specified property.
// Возвращает линзу для определенного свойства объекта, равного для геттера и сеттера
// Является синтаксическим сахаром для R.lens

const xLens = R.lensProp('x')
// аналог
//const xLens = R.lens(R.prop('x'), R.assoc('x'))

R.view(xLens, { x: 1, y: 2 }) //=> 1
R.set(xLens, 4, { x: 1, y: 2 }) //=> {x: 4, y: 2}
R.over(xLens, R.negate, { x: 1, y: 2 }) //=> {x: -1, y: 2}

//-----------------------------------------

const user = { name: 'John', surname: 'Flint' }

const nameLins = R.lensProp('name')

const name = R.view(nameLins, user)
const nameToUpper = R.toUpper(name)
const newUser = R.set(nameLins, nameToUpper, user) //=> { name: 'JOHN', surname: 'Flint' }

// или так
R.over(nameLins, R.toUpper, user) //=> { name: 'JOHN', surname: 'Flint' }
