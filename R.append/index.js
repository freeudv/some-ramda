'use strict'
const R = require('ramda')

//Returns a new list containing the contents of the given list, followed by the given element.
//Возвращает новый массив содержащий переданный массив и присоедененный к нему элемент

R.append('tests', ['write', 'more']) //=> ['write', 'more', 'tests']
R.append('tests', []) //=> ['tests']
R.append(['tests'], ['write', 'more']) //=> ['write', 'more', ['tests']]
