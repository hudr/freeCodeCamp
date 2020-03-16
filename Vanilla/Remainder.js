/*
    Remainder to see the division's rest.
    We also can see if a number is odd or even.
*/

function calcRemainder(a, b) {
    return a % b
}

function oddOrEven(a, b) {
    if(a % b === 1) {
        return 'odd number'
    } else {
        return 'even number'
    }
}

console.log('Remainder', calcRemainder(33, 2))
console.log('This is an', oddOrEven(33, 2))