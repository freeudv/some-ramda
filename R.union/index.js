"use strict"
const R = require("ramda")

//Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.
// Объединяет два массива в один без дублирующих элементов.

R.union([1, 2, 3], [2, 3, 4]) //=> [1, 2, 3, 4]
