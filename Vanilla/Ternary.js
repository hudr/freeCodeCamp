/**
 * Ternary Operator
 * condition ? statement-if-true : statement-if-false;
 */

var name = 'Hudson'
var result = name === 'Hudson' ? 'Administrator.' : 'User.'

console.log('Your role is:', result)

// Another example

function findBigger(a, b) {
    if (a === b) return `${a} and ${b} are equal.`
    return a > b ? `${a} is bigger than ${b}.` : `${b} is bigger than ${a}.`
}

console.log('Function findBigger():', findBigger(10, 10))