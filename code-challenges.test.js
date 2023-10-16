// ASSESSMENT 2: Coding Practical Questions with Jest

// const { array, number } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]
   
// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

// Psuedo code:
// input: create a funcion
// output: are numbers divisible by three
// create a function called divisibleByThree
// remove number from the input
// create a conditional that detemines wheather the number's are divisible by three and returns a message if the conditons are met

//  describe("divisibleByThree", () => {
//   it("returns is or is not divisible by three for each variable", () => {
 
//    const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
//    const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
//    const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
   
//    const divisibleByThree = (obj) => {
//     const number = obj.number;
//     if(number % 3 === 0) {
//       return `${number} is divisible by three`
//     } else {
//       return `${number} is not divisible by three`
//     }
//    }

//    expect(divisibleByThree(object1)).toEqual("15 is divisible by three") 
//    expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
//    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//   })
//  })


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.
// Psuedo code:
// Input: create a function
// Output: capitalize all words in the array
// create a function called capitalize that takes in an array
// use .map to iterate through the arrays
// use .toUpperCase to assign the first letter of the string uppercase  
  
describe("capitalize", () => {
  it("returns the statements for each variable", () => {

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


const capitalize = (array) => {
  return array.map((value) => {
    return value[0].toUpperCase() + value.substring(1)
  })
}

    expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})
