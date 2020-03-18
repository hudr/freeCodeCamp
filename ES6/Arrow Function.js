/**
 *  Arrow Function
 */

const myFunc = function () {
    const myVar = "value"
    return myVar
}
console.log('Function myFunc:', myFunc())

const myFunc2 = () => {
    const myVar = "value2"
    return myVar
}
console.log('[A] Function myFunc2:', myFunc2())

const myFunc3 = () => new Date()
console.log('[A] Function myFunc3:', myFunc3())

// With parameters
const doubler = (item) => item * 2
console.log('Function doubler:', doubler(2))

const multiply = (item, multi) => item * multi
console.log('Function multiply:', multiply(3, 3))