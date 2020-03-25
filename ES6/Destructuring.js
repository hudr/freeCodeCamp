/**
 * Destructuring
 */

const user = { name: 'John Doe', age: 34 }
//const name = user.name // name = 'John Doe'
//const age = user.age // age = 34

// ES6 destructuring syntax
const { name, age } = user

console.log('Name:', name)
console.log('Age:', age)

// Destructuring assignment to assign in another variable
const { name: userName, age: userAge } = user
console.log('UserName:', userName)
console.log('UserAge:', userAge)

// With nested objects
const user2 = {
  johnDoe: {
    age2: 34,
    email2: 'hudson.santosr@gmail.com'
  }
}

const {
  johnDoe: { age2, email2 }
} = user2

console.log('Age2:', age2)
console.log('Email2:', email2)

const {
  johnDoe: { age2: userAge2, email2: userEmail2 }
} = user2

console.log('UserAge2:', userAge2)
console.log('UserEmail2:', userEmail2)

// Use destructuring assignment to assign variables from arrays
const [a, b] = [1, 2, 3, 4, 5, 6]
console.log(a, b) // 1, 2

const [c, d, , , e] = [1, 2, 3, 4, 5, 6]
console.log(c, d, e) // 1, 2, 5

const [x, z, ...arr] = [1, 2, 3, 4, 5, 7]
console.log(x, z) // 1, 2
console.log(arr) // 3, 4, 5, 7

// Use destructuring to pass an object as parameter in functions
const profileUpdate = profileData => {
  const { name, age, nationality, location } = profileData
  //do something with these variables
}

//could be (you don't have to manipulate an entire obj)
const profileUpdate2 = ({ name, age, nationality, location }) => {
  //do something with these fields
}
