// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Durstenfeld shuffle algorithm for randomization
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
} 
function writePassword() {
// Character possibilites
  var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = lettersArr.map(letter => letter.toUpperCase());
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["!","#","$","%","&","(",")","*","+","-","/","<","=",">","?","@","[","]","^","{","|","}","~"];
  var charOptions = [];

  // Get the user-preferred password length (8-128 characters)
  var pwLength = parseInt(prompt("Passwords must be between 8 and 128 characters. How many characters would you like?"));
  if (pwLength < 8 || pwLength >= 128 || pwLength === null || isNaN(pwLength) === true) {
      alert("No password will be generated! Please enter a number of characters (between 8 and 128) for your password.")
    } else if (pwLength >= 8 && pwLength <= 128) {
      alert("Your password will be " + pwLength + " characters long.");
        // Confirm what characters the user would like to use
        var lowerCase = confirm("Would you like lowercase letters?");
        var upperCase = confirm("Would you like uppercase letters?");
        var numChoice = confirm("Would you like numbers?");
        var specCharChoice = confirm("Would you like special characters?");
      // Function for building our character array based on user choices. Rest parameters used on the push methods to ensure iterability.
      function buildArr(prompt, arr) {
        if (prompt === true) {
          charOptions.push(...arr);
          while (charOptions.length < pwLength) {
            charOptions.push(...arr)
          }
        } 
      }
      // Build our character array
      buildArr(lowerCase, lettersArr);
      buildArr(upperCase, upperLetters);
      buildArr(numChoice, numbers);
      buildArr(specCharChoice, specChar);
        // Account for all false case
        if (lowerCase === false && upperCase === false && numChoice === false && specCharChoice === false) {
          alert("No password will be generated! Please select at least one character type.")
        }
    }
    console.log(charOptions + "---unshuffled")
    // then call our shuffle function to randomize the array
    shuffleArray(charOptions);
    console.log("---------------------");
    console.log(charOptions + " ---shuffled");
    // Slice our shuffled array to get our final password as an array
    let pwArray = charOptions.slice(0, pwLength);
    // And join to create a string version of the final password
    let password = pwArray.join("");
    // Finally, push our password string to the document's HTML
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}