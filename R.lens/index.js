'use strict'
const R = require('ramda')

//Returns a lens for the given getter and setter functions.
//The getter "gets" the value of the focus; the setter "sets" the value of the focus.
//The setter should not mutate the data structure.

// Возвращает линзу с определенными геттереом и сеттером для свойсва объекта.
// Геттер возвращает значение сфкусированного свойства, сеттер - устанавливает.
// R.view, R.set, R.over - вспомогательные функции для работы с линзами.

var xLens = R.lens(R.prop('x'), R.assoc('x'))

R.view(xLens, { x: 1, y: 2 }) //=> 1
R.set(xLens, 4, { x: 1, y: 2 }) //=> {x: 4, y: 2}
R.over(xLens, R.negate, { x: 1, y: 2 }) //=> {x: -1, y: 2}

//-----------------------------------------

const user = { name: 'John', surname: 'Flint' }

const nameLins = R.lens(R.prop('name'), R.assoc('name'))
// R.lensProp('name') - можно так, если свойство геттера и сеттера совпадают

const name = R.view(nameLins, user)
const nameToUpper = R.toUpper(name)
const newUser = R.set(nameLins, nameToUpper, user) //=> { name: 'JOHN', surname: 'Flint' }

// или так
R.over(nameLins, R.toUpper, user) //=> { name: 'JOHN', surname: 'Flint' }
