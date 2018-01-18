'use strict'

const R = require('ramda')

// Returns true if the specified object property is equal, in R.equals terms, to the given value; false otherwise.
// Возвращает true или false в зависимости от того, равняется ли указанное поле объекта указанному значению или нет.
R.propEq('id', 2, { id: 2 }) //true
R.propEq('id')(2)({ id: 2 }) //true

//--------------------------------------------------------
const abby = { name: 'Abby', age: 7, hair: 'blond' }
const fred = { name: 'Fred', age: 12, hair: 'brown' }
const rusty = { name: 'Rusty', age: 10, hair: 'brown' }
const alois = { name: 'Alois', age: 15, disposition: 'surly' }
const kids = [abby, fred, rusty, alois]

let hasBrownHair = R.propEq('hair', 'brown')

R.propEq('hair', 'brown', abby) //false
R.propEq('hair', 'brown')(fred) //true

R.filter(hasBrownHair, kids) //=> [fred, rusty]

//-------------------------------------------------------
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Alex' }]

//Вариант на чистом JS
const alex = users.find(user => user.id === 2)

// Вариант на Ramda
const alexR = R.find(R.propEq('id', 2), users)
//или
const idEqual = R.propEq('id') //point-free function
const isAlex = idEqual(2)
const alexR = R.find(isAlex, users)
//или даже так
const alexR = R.find(R.propEq('id')(2))(users)
