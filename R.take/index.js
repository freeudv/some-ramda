'use strict'
const R = require('ramda')

//Returns the first n elements of the given list, string, or transducer/transformer (or object with a take method).
//Возвращает первые n элементов строки/массива/объекта

R.take(1, ['foo', 'bar', 'baz']) //=> ['foo']
R.take(2, ['foo', 'bar', 'baz']) //=> ['foo', 'bar']
R.take(3, ['foo', 'bar', 'baz']) //=> ['foo', 'bar', 'baz']
R.take(4, ['foo', 'bar', 'baz']) //=> ['foo', 'bar', 'baz']
R.take(3, 'ramda') //=> 'ram'

var personnel = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty'
]

var takeFive = R.take(5)
takeFive(personnel)
//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
