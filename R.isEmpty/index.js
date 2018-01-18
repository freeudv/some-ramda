'use strict'
const R = require('ramda')

//Returns true if the given value is its type's empty value; false otherwise.
// Возвращает true если переданное значение данного типа пустое.

R.isEmpty([1, 2, 3]) //=> false
R.isEmpty([]) //=> true
R.isEmpty('') //=> true
R.isEmpty(null) //=> false
R.isEmpty(undefined) //=> false
R.isEmpty({}) //=> true
R.isEmpty({ length: 0 }) //=> false

// JS аналог
const isEmpty = prop => {
  return (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  )
}
