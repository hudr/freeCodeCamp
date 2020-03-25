/**
 * Spread & Rest Operators
 * https://medium.com/javascript-in-plain-english/es6-spread-parameter-vs-rest-operator-5e3c924c4e1f
 */

// Using rest parameter with function parameters
const howMany = (...args) => {
  return 'You have passed ' + args.length + ' arguments.'
}

console.log(howMany(0, 1, 2))
console.log(howMany('string', null, [1, 2, 3], {}))

function sumWithReduce(...args) {
  return args.reduce((a, b) => a + b, 0)
}

console.log('Result sumWithReduce:', sumWithReduce(3, 3, 3, 3))

// Use spread operator to evaluate arrays in-place
const arr = [6, 89, 3, 45]
const maximus = Math.max(...arr) // returns 89
console.log('Maximus:', maximus)
