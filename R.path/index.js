'use strict'
const R = require('ramda')

//Retrieve the value at a given path.
// Возвращает значение из объекта по указанному пути свойств или undefined(т.е. не Вызывает ошибку и не дает упасть коду)
//Принимает массив свойств и сам объект.

R.path(['a', 'b'], { a: { b: 2 } }) //=> 2
R.path(['a', 'b'], { c: { b: 2 } }) //=> undefined

//------------------------------------------------------------------
const bill = {
  nick: 'bill',
  country: 'UK',
  personal: {
    profile: {
      name: 'Bill',
      surname: 'Ivanov',
      age: 29
    }
  }
}

const mike = {
  nick: 'mike',
  country: 'UK',
  personal: {}
}

const getSurname = user => user.personal.profile.surname

getSurname(bill) //Ivanov
getSurname(mike) // Error!!! Code is down

// Вариант решения на JS
const getSurname = user =>
  user &&
  user.personal &&
  user.personal.profile &&
  user.personal.profile.surname

getSurname(bill) //Ivanov
getSurname(mike) // undefined

// Вариант решения на Ramda
const getSurname = R.path(['personal', 'profile', 'surname'])

getSurname(bill) //Ivanov
getSurname(mike) // undefined
