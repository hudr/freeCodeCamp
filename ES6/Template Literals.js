/**
 * Template Literals
 */

const person = {
  name: 'Zodiac Hasbro',
  age: 56
}

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`

console.log('Greeting:', greeting)

// Object literal declarations using object property shorthand
// This
const getMousePosition = (x, y) => ({
  x: x,
  y: y
})

// Could be this
const getMousePosition2 = (x, y) => ({ x, y })
