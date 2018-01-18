'use strict'
const R = require('ramda')

//A function which calls the two provided functions and returns the && of the results.
//It returns the result of the first function if it is false-y and the result of the second function otherwise.
//Note that this is short-circuited, meaning that the second function will not be invoked if the first returns a false-y value.
//Принимает две функции и возвращает новую функцию, которая возвращает true если обе функции возвращают true

const test = R.both(value => value < 2, value => value > 0)

test(1) //true
test(2) // false

//-------------------------------------------------------
const gt10 = R.gt(R.__, 10)
const lt20 = R.lt(R.__, 20)
const f = R.both(gt10, lt20)
f(15) //=> true
f(30) //=> false

//-------------------------------------------------------
const testUser = {
  age: 20,
  birthCountry: 'UK'
}

//Вариант на чистом JS
const wasBornInCountry = person => person.birthCountry === 'UK'
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = person => wasBornInCountry(person) || wasNaturalized
const isEligibalToVote = person => isOver18(person) && isCitizen(person)

console.log(isEligibalToVote(testUser))

//Вариант на Ramda
//Пишем point-free функции, не передавая туда аргумент, и только в конце передаем person
const wasBornInCountryR = R.propEq('birthCountry', 'UK')

const isCitizenR = R.either(wasBornInCountryR, wasNaturalized)
const isEligibalToVoteR = R.both(isOver18, isCitizenR)

console.log(isEligibalToVoteR(testUser))
