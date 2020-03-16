/*
    Compound Operations
    
    Don't need to use:
    foo = 10
    foo = foo + 10

    Should use:
    foo = 10
    foo += 10
*/

var one = 10
one += 10
console.log('one', one)

var two = 10
two -= 10
console.log('two', two)

var three = 10
three *= 10
console.log('three', three)

var four = 10
four /= 10
console.log('four', four)