/**
 *  Const Variable (Read only)
 */

"use strict"
const FAV_PET = "Cats"
// FAV_PET = "Dogs" // returns error

console.log("FAV_PET:", FAV_PET)

// Mutate Array
const s = [25, 35, 45]
s[2] = 55
console.log('Mutate third element:', s)

let b = [10, 20, 30]
b = "Hudson"

console.log('let Mutation:', b)

const z = [10, 20, 30]
z[3] = "Hudson"
console.log('const Mutation:', z)


const h = [10, 20, 30]
console.log('Original h:', h)

for (var i = 0; i < h.length; i++) {
    const random = Math.floor(Math.random() * 20)
    h[i] = random
}

console.log('const Mutation w/ for:', h)

// Prevent object mutation
const myObj = {
    name: "Hudson",
    age: 25
}

myObj.city = "SP"

console.log('myObj mutated:', myObj)

Object.freeze(myObj)

// myObj.height = 53 | Object freezed /not extensible/

