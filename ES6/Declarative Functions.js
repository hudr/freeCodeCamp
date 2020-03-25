/**
 * Write concise declarative functions with ES6
 */

// ES5
const person = {
  name: 'Taylor',
  sayHello: function() {
    return `Hello! My name is ${this.name}.`
  }
}

// ES6
const person2 = {
  name: 'Hudson',
  sayHello() {
    return `Hello! My name is ${this.name}.`
  }
}

console.log('Person sayHello():', person.sayHello())
console.log('Person2 sayHello():', person2.sayHello())
