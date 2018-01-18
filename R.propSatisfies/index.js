'use strict'
const R = require('ramda')

//Returns true if the specified object property satisfies the given predicate; false otherwise. You can test multiple properties with R.where.
// Возвращает true, если определенное свойство объекта удовлетворяет переданной фукции-predicate

R.propSatisfies(x => x > 0, 'x', { x: 1, y: 2 }) //=> true
R.propSatisfies(x => x < 10, 'length')('12345') //=> true
