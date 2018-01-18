'use strict'
const R = require('ramda')

//Returns a curried equivalent of the provided function. Its arguments needn't be provided one at a time.
// Возвращает каррированный вариант переданной функции.

const objects = [{ id: 1 }, { id: 2 }, { id: 3 }]

function add(a, b) {
  return a + b
}

//-------------------------------------------------------
const curriedAdd = R.curry(add)
curriedAdd(1)(2)

//-------------------------------------------------------
// Вариант на чистом JS
const getIds = (objects, prop) => objects.map(object => object[prop])
const result = getIds(objects, 'id')

// Вариант с Ramda
const get = R.curry((prop, obj) => obj[prop])
const map = R.curry((fn, values) => values.map(fn))

const getIdsR = map(get('id'))

const resultR = getIdsR(objects)

//-------------------------------------------------------
const fetchFromServer = () => {
  return new Promise(resolve => {
    resolve({
      user: 'Jack',
      posts: [
        {
          title: 'why curry?'
        },
        {
          title: 'functional programming'
        }
      ]
    })
  })
}

// Вариант на чистом JS
fetchFromServer()
  .then(data => data.posts)
  .then(posts => posts.map(post => post.title))
  .then(titles => console.log('titles', titles))

// Вариант с Ramda
fetchFromServer()
  .then(get('posts'))
  .then(map(get('title')))
  .then(titles => console.log('titles', titles))
