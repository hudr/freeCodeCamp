/*
    Store multiple datas inside array
*/

var firstArray = ["Hudson", 25]
console.log('firstArray', firstArray)

// Get element with [index]
console.log('Second item from array', firstArray[1])

// Mutate the array
firstArray[2] = "RJ"
console.log('Array mutated', firstArray)

// Multi-dimensional array
var nestedArray = [["Hudson", 25], ["Lorem", 1992]]
console.log('nestedArray', nestedArray)

// Access multi dimensional array property with [index]
console.log('It should print \"Lorem"\:', nestedArray[1][0])

// Manipulating arrays
// push() - Add values inside array
var arr = [1, 2, 3]
arr.push(4)
arr.push(["Foo", 10], ["Bar", 20])
console.log('push()', arr)

// pop() - Get last value from array and remove it from there.
var foo = [1, 2, 3, 4, 5, 6, 7]
var bar = foo.pop()
console.log('pop()', bar)
console.log('foo', foo)

// shift() - Get the first value from array and remove it from there
var foo2 = [1, 2, 3, 4, 5, 6, 7]
var bar2 = foo2.shift()
console.log('shift()', bar2)
console.log('foo2', foo2)

// unshift() - Works like push() but add values at the beginning
var foo3 = [1, 2, 3, 4, 5, 6, 7]
var bar3 = foo3.unshift(0, "Hudson")
console.log('unshift()', bar3)
console.log('foo3', foo3)

// Example of shopping lst
var shoppingList = [
    ["Chocolate", 15],
    ["Potato", 31],
    ["Table", 2],
    ["Rice", 3],
    ["Lemon", 20]
]

console.log('shoppingList', shoppingList)