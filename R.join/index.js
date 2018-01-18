'use strict'
const R = require('ramda')

//Returns a string made by inserting the separator between each element and concatenating all the elements into a single string.
//Возвращает строку, составленную из элементов массива со вставленным разделителем между каждым элементом.

const spacer = R.join(' ')
spacer(['a', 2, 3.4]) //=> 'a 2 3.4'

R.join('|', [1, 2, 3]) //=> '1|2|3'
