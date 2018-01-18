'use strict'
const R = require('ramda')

//Given a function that generates a key, turns a list of objects into an object indexing the objects by the given key.
//Note that if multiple objects generate the same value for the indexing key only the last value will be included in the generated object.
//Acts as a transducer if a transformer is given in list position.

//Преобразует массив объектов в объект, упорядоченный по ЗНАЧЕНИЮ переданного ключа

const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }]
R.indexBy(R.prop('id'), list) //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}

//---------------------------------------------------------------------------------------------------

const objArr = [
  {
    id: '1',
    categoryId: '1',
    name: 'Apple iPhone 5c',
    price: 823,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB'
  },
  {
    id: '2',
    categoryId: '1',
    name: 'Apple iPhone 6',
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB'
  },
  {
    id: '3',
    categoryId: '4',
    name: 'Lenovo A6000',
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB'
  },
  {
    id: '4',
    categoryId: '5',
    name: 'Nokia Lumia 1520',
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB'
  },
  {
    id: '5',
    categoryId: '3',
    name: 'HTC One',
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB'
  },
  {
    id: '6',
    categoryId: '2',
    name: 'Samsung Galaxy S6',
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB'
  }
]

R.indexBy(R.prop('id'))(objArr)

console.log(R.indexBy(R.prop('id'))(objArr))
