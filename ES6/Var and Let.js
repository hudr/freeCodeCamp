/**
 *  Differences between var and let
 */

"use strict"

// Var - Can be overwrited without an error
var camper = 'Lorem'
var camper = 'Ipsum'
console.log('Camper:', camper) // logs 'David'

// Let - Couldn't be overwrited
let camper2 = 'Lorem'
//let camper2 = 'Ipsum'
console.log('Camper2:', camper2)

// Global and Scope
var numArray = []
// i Globally is 3
for (var i = 0; i < 3; i++) {
    numArray.push(i)
}

console.log('numArray:', numArray) // returns [0, 1, 2]
console.log('i:', i) // returns 3

// let in global scope
var printNumTwo;
for (let i2 = 0; i2 < 3; i2++) {
    if (i2 === 2) {
        printNumTwo = function () {
            return i2
        }
    }
}

console.log('printNumTwo():', printNumTwo())