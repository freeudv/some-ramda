'use strict'
const R = require('ramda')

//Returns true if the specified value is equal, in R.equals terms, to at least one element of the given list; false otherwise.
// Возвращает true если хоть один элемент переданного массива совпадает с первым аргументом, иначе false.

R.contains(3, [1, 2, 3]) //=> true
R.contains(4, [1, 2, 3]) //=> false
R.contains({ name: 'Fred' }, [{ name: 'Fred' }]) //=> true
R.contains([42], [[42]]) //=> true
