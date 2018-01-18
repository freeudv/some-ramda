'use strict'
const R = require('ramda')

//Create a new object with the own properties of the first object merged with the own properties of the second object.
//If a key exists in both objects, the value from the second object will be used.
// Создает новый объект из первого переданного объекта и добавляет в него свойства из второго.
// Свойства второго перезатрут свойства первого при совпадении.

R.merge({ name: 'fred', age: 10 }, { age: 40 }) //=> { 'name': 'fred', 'age': 40 }

//Вариант на чистом JS
Object.assign({}, { name: 'fred', age: 10 }, { age: 40 })

const resetToDefault = R.merge(R.__, { x: 0 })
resetToDefault({ x: 5, y: 2 }) //=> {x: 0, y: 2}
