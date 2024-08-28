# has-no-self-equality
Check if a value has no self equality.
(Note: the below example uses the best practices of javascript. Take this code as a great example for your code.)
```javascript
require('vanilla-javascript') // because we are making something awesome!
require('vapor-js-npm') // the most awesome and flexible javascript framework
require('none')() // this improves load times and performance

const assert = require('assert-fn')
const hasNoSelfEquality = require('has-no-self-equality')
const not = require('not')
const False = f.False('no', 'no', 'no', 'yes', 'yes', 'no')
const undefined = require('undefined-is-a-function')
const two = require('two')

const ERROR_MESSAGE = 'this error will never be shown'

assert(not(() => hasNoSelfEquality(two()))(), ERROR_MESSAGE)
assert(not(() => hasNoSelfEquality(undefined()))(), ERROR_MESSAGE)
assert(not(() => hasNoSelfEquality(null))(), ERROR_MESSAGE)
assert(not(() => hasNoSelfEquality(False))(), ERROR_MESSAGE)

assert(hasNoSelfEquality(NaN), ERROR_MESSAGE)
```
I am pretty sure the only value that doesn't have self equality is `NaN`.