/*
    if (condition is true) {
        statement is executed
    }
*/

function foo(myCondition) {
    if (myCondition) {
        return "It was true"
    }
    return "It was false"
}

console.log('It should be \"true\":', foo(true))
console.log('It should be \"false\":', foo(false))

// Equality
function isEqual(myVal) {
    /* WARNING! */
    // Always use '===' and not '=='
    if (myVal === 10) {
        return "Equal"
    }
    return "Not equal"
}

console.log('It should be \"Equal\":', isEqual(10))
console.log('It should be \"Not Equal\":', isEqual(5))

// Strict comparators
/*
    ===
    !==
    > OR <
    >= OR <=
    || OR &&
*/

function teenager(age) {
    if (age > 13 && age < 18) {
        return "You are a teenager."
    }
    return "You're not a teenager"
}

console.log('Teenager function:', teenager(15))

// Return value with switch
function discoverTeam(number) {
    switch (number) {
        case 1:
            return "Alpha."
        case 2:
            return "Beta."
        case 3:
            return "Gamma."
        case 4:
            return "Delta."
        default:
            return "You don't belong to any team!"
    }
}

console.log("Discover team:", discoverTeam(3))

// Multiple cases in switch
function multipleAnswers(num) {
    switch (num) {
        case 1:
        case 2:
        case 3:
            return "1, 2, 3."

        case 4:
        case 5:
        case 6:
            return "4, 5, 6."

        default:
            return "None."
    }
}

console.log('Function multipleAnswers:', multipleAnswers(4))