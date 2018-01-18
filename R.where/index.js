'use strict'
const R = require('ramda')

//Takes a spec object and a test object; returns true if the test satisfies the spec.
//Each of the spec's own properties must be a predicate function.
//Each predicate is applied to the value of the corresponding property of the test object.
//where returns true if all the predicates return true, false otherwise.
//where is well suited to declaratively expressing constraints for other functions such as filter and find.
// Принимает объект с условиями для другого объекта.
// Используется для комбинации нескольких условий и создает predicate, который проверяет тестируемый объект и возвращае true если все условия выполняются.

var pred = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
})

pred({ a: 'foo', b: 'xxx', x: 11, y: 19 }) //=> true
pred({ a: 'xxx', b: 'xxx', x: 11, y: 19 }) //=> false
pred({ a: 'foo', b: 'bar', x: 11, y: 19 }) //=> false
pred({ a: 'foo', b: 'xxx', x: 10, y: 19 }) //=> false
pred({ a: 'foo', b: 'xxx', x: 11, y: 20 }) //=> false

//--------------------------------------------------------------------
const products = [
  { name: 'Jacket', price: 50, category: 'closes', count: 20 },
  { name: 'Boot', price: 120, category: 'closes', count: 30 },
  { name: 'Iphone', price: 600, category: 'electonics', count: 5 },
  { name: 'Ipad', price: 250, category: 'electonics', count: 10 }
]

//Надо получить наименования товаров, в категории closes с количеством < 50 и ценой < 100
//Вариант на чистом JS
const getProductNames = items => {
  const filteredProdicts = items.filter(
    item => item.category === 'closes' && item.count < 50 && item.price < 100
  )

  return filteredProdicts.map(item => item.name)
}

getProductNames(products) // ['Jacket']

//Вариант Ramda

const getProductNamesR = R.compose(
  R.pluck('name'),
  R.filter(
    R.where({
      category: R.equals('closes'),
      count: R.lt(R.__, 50),
      price: R.lt(R.__, 100)
    })
  )
)

getProductNamesR(products) // ['Jacket']
