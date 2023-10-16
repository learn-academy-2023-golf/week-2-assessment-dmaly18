// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findIndexOfFirstVowel(str) {
    const vowels = "aeiouAEIOU"; // Define a string containing all vowels
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        console.log(`Index of the first vowel: ${i}`);
        return;
      }
    }
  
    console.log("No vowels found in the string.");
  }
  

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// I wasnt surprised by the output because we didn't ask for a string to be inputed. I like the code its checking for vowels uppercase and lowercase. I would have defined a string first then write the function and argument to see if the code works.