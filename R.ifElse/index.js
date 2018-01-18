'use strict'
const R = require('ramda')

//Creates a function that will process either the onTrue or the onFalse function depending upon the result of the condition predicate.
// Принимает функцию predicate и если true - выполняется вторая функция, если false - третья.
// Если на вход передается объект, то этот объект передается затем в каждую функцию.

const incCount = R.ifElse(
  R.has('count'),
  R.over(R.lensProp('count'), R.inc),
  R.assoc('count', 1)
)
incCount({}) //=> { count: 1 }
incCount({ count: 1 }) //=> { count: 2 }

//--------------------------------------------------------
const video = {
  '720p': 'funny-video-hd.mp4',
  '480': 'funny-video-hd.mp4',
  isHD: true
}

//Вариант на чистом JS
const getVideoFilePath = video => {
  const file = video.isHD ? video['720p'] : video['480p']
  return `/api/videos/${file}`
}

getVideoFilePath(video) //=> /api/vodeos/funny-video-hd.mp4

const getVideoFilePathR = R.compose(
  R.concat('/api/videos/'),
  R.ifElse(R.propEq('isHD', true), R.prop('720p'), R.prop('480p'))
)

console.log(getVideoFilePathR(video))
