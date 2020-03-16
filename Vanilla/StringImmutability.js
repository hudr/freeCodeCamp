/*
    When you declare a string variable
    you cannot alter this value.

    TypeError: Cannot assign to read only property '0' of string 'Hudson'

    The only way to change this is giving a new value
*/

"use strict"

// Wrong
var myName = "Hudson"
myName[0] = "J"
console.log(myName)

// Correct
var myLastName = "Ramos"
myLastName = "R."
console.log(myLastName)