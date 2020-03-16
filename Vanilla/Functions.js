/*
    Approach for reusable code
*/

// Declare function
function functionName() {
    console.log("Hello world!")
}

functionName()

// Function with arguments
function foo(foo, bar) {
    console.log(foo, bar)
}

foo(1, 2)

///////////////////////////////////////

// Global and Function Scope
var myGlobal = 10

function foo2() {
    console.log(myGlobal)
}

foo2()

function foo3() {
    var loc = "foo"
    console.log(loc)
}

foo3()
// console.log(loc) -- results not defined

var someVar = "foo"

function foo4() {
    var someVar = "Bar"
    console.log(someVar)

}

foo4()







