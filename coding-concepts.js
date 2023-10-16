// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
console.log(cohort.split(" "))

// a) Your answer:"G,o,l,f 2, 0, 2, 3"
// b) Verify and explain: my answer was wrong 'Golf', '2023' was the result I overlooked what was in the parentheses.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: error
// b) Verify and explain: code came back undefined because there is no return value 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: code came back 11, 13, 15 the code used .filter to go through the array and modulo to detrime which numbers in the array were odd.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: code came back JavaScript because the console.log called on myCodingSkills and languages at the 0 index which would be JavaScript.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: code came back student: 'George', cohort: 'Golf', year: 2023.  new Learn was assigned to learnStudent the 'new' is used to create a new object from the class 'name', 'name' is set to george. learnStudent is a object based on the learn class.  
