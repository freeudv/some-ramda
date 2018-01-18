'use strict'
const R = require('ramda')

//Makes a descending comparator function out of a function that returns a value that can be compared with < and >.
// Делает функцию сравнения для сортировки. Принимает другую функцию с условиями сортировки.
var byAge = R.descend(R.prop('age'))
var people = [
  // ...
]
var peopleByOldestFirst = R.sort(byAge, people)

R.sort(R.descend(R.identity), [4, 2, 7, 5]) //=> [7, 5, 4, 2]);
