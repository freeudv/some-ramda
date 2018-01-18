'use strict'
const R = require('ramda')

//Returns the result of "setting" the portion of the given data structure focused by the given lens to the result of applying the given function to the focused value.
// Функция для работы с линзами.
// Принимает линзу, функцию для изменения свойства в сеттере линзы и сам объект/массив, Возвращает новый массив/объект.

const headLens = R.lensIndex(0)

R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']

//-------------------------------------------------------
const user = { name: 'John', surname: 'Flint' }

const nameLins = R.lensProp('name')

R.over(nameLins, R.toUpper, user) //=> { name: 'JOHN', surname: 'Flint' }

// аналог
const name = R.view(nameLins, user)
const nameToUpper = R.toUpper(name)
const newUser = R.set(nameLins, nameToUpper, user) //=> { name: 'JOHN', surname: 'Flint' }
