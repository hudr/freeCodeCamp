/*
    Random Numbers
*/

// Between 0 and 1
console.log('Math.random()', Math.random())

// Using Math.floor to round
// 0 and 19
console.log('Math.floor()', Math.floor(Math.random() * 20))

// Generate random name
// within a defined range
var min = 100
var max = 102
console.log('Math.random(with range)',
    Math.floor(Math.random()
        * (max - min + 1))
    + min
)