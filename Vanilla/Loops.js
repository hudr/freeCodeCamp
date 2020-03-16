/*
    Loops
*/

// While
var ourArray = []
var i = 0

while (i < 5) {
    ourArray.push(i)
    i++
}
console.log('OurArray', ourArray)

// For
var ourArray2 = []
for (var i = 0; i < 5; i++) {
    ourArray2.push(i)
}
console.log('OurArray2', ourArray2)

// For loop with odd numbers
var ourArray3 = []
for (var i = 0; i < 10; i += 2) {
    ourArray3.push(i)
}
console.log('OurArray3', ourArray3)

// For loop backwards
var ourArray4 = []
for (var i = 10; i > 0; i -= 2) {
    ourArray4.push(i)
}
console.log('OurArray4', ourArray4)

// Iterate through an array with for
var arr = [10, 9, 8, 7, 6]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Nesting For loops
var foo = [
    [1, 2],
    [3, 4],
    [5, 6]
]

// Take the number of elements in array
for (var i = 0; i < foo.length; i++) { // 3
    // Take the number of elements inside the array
    for (var j = 0; j < foo[i].length; j++) { // 2
        // Get i = 0, j = 0 and repeat
        // [0][0], [0][1]
        // [1][0], [1][1]
        // [2][0], [2][1]
        console.log(foo[i][j])
    }
}

// Do & While
var ourArray5 = []
var i = 0

// It will run once before get while condition
do {
    ourArray5.push(i)
    i++
} while (i < 5)

console.log('OurArray5', ourArray5)

// It will run until condition turn false
while (i > 5) {
    ourArray5.push(i)
    i++
}