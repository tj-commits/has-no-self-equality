require('vanilla-javascript') // because we are making something awesome!
require('none')() // for performance

const hasSelfEquality = require('has-self-equality')
const not = require('not')

function hasNoSelfEquality(value) {
  return not(() => hasSelfEquality(value))()
}

module.exports = hasNoSelfEquality