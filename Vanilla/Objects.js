/*
    Javascript Objects
*/

var cat = {
    name: "Lorem",
    legs: 4,
    tails: 1,
    enemies: ["Water", "Dogs"],
}

console.log('Cat', cat)

var myObj = {
    prop1: "val1",
    prop2: "val2"
}

// Access object properties
var prop1val = myObj.prop1 // val1
var prop2val = myObj.prop2 // val2

myObj["prop1"] // val1
myObj["prop2"] // val2

var hObject = "prop1"
var myhObject = myObj[hObject]
console.log('Access with object:', myhObject) // val1

// Update object properties
var ourDog = {
    name: "Camper",
    legs: 4,
    tails: 1,
    friends: ["Everything"]
}

ourDog.name = "Lorem"
ourDog["name"] = "Lorem"
console.log('Our dog:', ourDog)

// Add new properties to object
ourDog.age = 11
ourDog["age"] = 11
console.log('Our dog with new prop:', ourDog)

// Remove properties from object
delete ourDog.tails
console.log('Our dog without tail', ourDog)

// Test object for props
console.log('Should be \"true"\:', ourDog.hasOwnProperty("name"))
console.log('Should be \"false"\:', ourDog.hasOwnProperty("tails"))

// Nested objects
var ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];
console.log('OurPets1:', ourPets[0].names[1]) // "Fluffy"
console.log('OurPets2:', ourPets[1].names[0]) // "Spot"