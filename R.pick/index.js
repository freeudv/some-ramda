'use strict'
const R = require('ramda')

//Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored.
// Возвращает частичную копию объекта содержащую только перечень ключей из первого аргумента и их значений.
// Если ключ не существует, он игнорируется.

R.pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }) //=> {a: 1, d: 4}
R.pick(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }) //=> {a: 1}
R.pick(['f'], { a: 1, b: 2, c: 3, d: 4 }) // => {}
R.pick([], { a: 1, b: 2, c: 3, d: 4 }) // => {}
