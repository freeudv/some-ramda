'use strict'
const R = require('ramda')

//Returns a new list containing only one copy of each element in the original list.
//R.equals is used to determine equality.
// Возвращает массив, содержащий только одну копию каждого элемента оригинального массива.

R.uniq([1, 1, 2, 1]) //=> [1, 2]
R.uniq([1, '1']) //=> [1, '1']
R.uniq([[42], [42]]) //=> [[42]]
