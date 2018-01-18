'use strict'
const R = require('ramda')

//Replace a substring or regex match in a string with a replacement.
//Заменяет совпадающую подстроку или regEx на переданную подстроку
R.replace('foo', 'bar', 'foo foo foo') //=> 'bar foo foo'
R.replace(/foo/, 'bar')('foo foo foo') //=> 'bar foo foo'

// Use the "g" (global) flag to replace all occurrences:
R.replace(/foo/g, 'bar', 'foo foo foo') //=> 'bar bar bar'
