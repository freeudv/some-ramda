'use strict'
const R = require('ramda')

//Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.
//This function is known as const, constant, or K (for K combinator) in other languages and libraries.
// Взвращает функцию, которая всегда возвращает переданное значение.

const t = R.always('Tee')
t() //=> 'Tee'
