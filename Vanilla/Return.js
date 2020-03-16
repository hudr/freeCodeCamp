/*
    Send value back out of a function
*/

function plusThree(num) {
    return num + 3
}

var result = plusThree(5) // 8

console.log('Result', result)

// Return isn't necessary ALWAYS
// This example we only need to change global var
var sum = 0
function addSum(num) {
    sum = sum + num
}

console.log('It returns \"undefined"\:', addSum(3))
console.log('It returns sum:', sum)

// Stand in line
/*
    In Computer Science a queue is an
    abstract Data Structure where items
    are kept in order. New items can be
    added at the back of the queue and
    old items are taken off from the
    front of the queue.
*/

// Add item in the end of array
// Get the first item of new array
function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift()
}

var testArr = [5, 6, 7, 8, 9]
console.log('NextInLine:', nextInLine(testArr, 1))

function welcomeToBooleans() {
    return true
}

console.log('WelcomeToBooleans:', welcomeToBooleans())