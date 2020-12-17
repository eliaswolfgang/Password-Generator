// Assignment Code

var generateBtn = document.querySelector("#generate");


// Durstenfeld shuffle algorithm for randomizing the password character array 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
} 

// Before generating a password, make sure the user selects tbe correct length parameters and their character preferences
function writePassword() {

  var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = lettersArr.map(letter => letter.toUpperCase());
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["!","#","$","%","&","(",")","*","+","-","/","<","=",">","?","@","[","]","^","{","|","}","~"];
  var charOptions = [];
  var pwLength = parseInt(prompt("How many characters would you like?"));
  
  if (pwLength < 8 || pwLength >= 128 || pwLength === null || isNaN(pwLength) === true) {
      alert("No password will be generated! Please enter a number of characters (between 8 and 128) for your password.")
    } else if (pwLength >= 8 && pwLength <= 128) {
      alert("Your password will be " + pwLength + " characters long.");
        // Contained within this else if to properly nest confirms
        var lowerCase = confirm("Would you like lowercase letters?");
        var upperCase = confirm("Would you like uppercase letters?");
        var numChoice = confirm("Would you like numbers?");
        var specCharChoice = confirm("Would you like special characters?");
        if (lowerCase === true) {
          charOptions.push(...lettersArr);
          while (charOptions.length < pwLength) {
            charOptions.push(...lettersArr)
          }
        } 
        if (upperCase === true) {
          charOptions.push(...upperLetters);
          while (charOptions.length < pwLength) {
            charOptions.push(...upperLetters)
          }
        }
        if (numChoice === true) {
          charOptions.push(...numbers);
          while (charOptions.length < pwLength) {
            charOptions.push(...numbers)
          }
        }
        if (specCharChoice === true) {
          charOptions.push(...specChar);
          while (charOptions.length < pwLength) {
            charOptions.push(...specChar)
          }
        } 
        // Now our array of character options is fully built out. Account for jerks and pranksters, just in case...
        if (lowerCase == false && upperCase == false && numChoice == false && specCharChoice == false) {
          alert("No password will be generated! Please select at least one character type.")
        }
    }
    
    // Logs to troubleshoot randomization, if needed
    console.log("---------------------");
    console.log(charOptions + " ---pre-shuffle");
    shuffleArray(charOptions);
    console.log("---------------------");
    console.log(charOptions + " ---shuffled");

    // Slice our shuffled charOptions array to get our password array
    var pwArray = charOptions.slice(0, pwLength);
    // And join to create a string version of the password array
    let password = pwArray.join("");

    // Finally, push our password string to the document's HTML
    var passwordText = document.querySelector("#password");
    passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
