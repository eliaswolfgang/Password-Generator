// Assignment Code
const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);
// Durstenfeld shuffle algorithm for randomization
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function generatePassword() {
// Character possibilites
  const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperLetters = lettersArr.map((letter) => letter.toUpperCase());
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', '<', '=', '>', '?', '@', '[', ']', '^', '{', '|', '}', '~'];
  const charOptions = [];

  // Get the user-preferred password length (8-128 characters)
  const pwLength = parseInt(prompt('Passwords must be between 8 and 128 characters. How many characters would you like?'));
  if (pwLength < 8 || pwLength > 128 || pwLength === null || isNaN(pwLength) === true) {
    alert('No password will be generated! Please enter a number of characters (between 8 and 128) for your password.');
  } else {
    alert(`Your password will be ${pwLength} characters long.`);
    // Confirm what characters the user would like to use
    const lowerCase = confirm('Are lowercase letters ok?');
    const upperCase = confirm('Are uppercase letters ok?');
    const numChoice = confirm('Are numbers ok?');
    const specCharChoice = confirm('Are special characters ok?');
    // Function for building our character array based on user choices. Rest parameters used on the push methods to ensure iterability.
    function buildArr(prompt, arr) {
      if (prompt === true) {
        charOptions.push(...arr);
        while (charOptions.length < pwLength) {
          charOptions.push(...arr);
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
      alert('No password will be generated! Please select at least one character type.');
    }
  
  // console.log(`${charOptions}---unshuffled`);
  // then call our shuffle function to randomize the array
  shuffleArray(charOptions);
  // console.log("---------------------");
  // console.log(charOptions + " ---shuffled");
  // Slice our shuffled array to get our final password as an array
  const pwArray = charOptions.slice(0, pwLength);
  // And join to create a string version of the final password
  return pwArray.join('');
 } 
}

function writePassword() {
  alert("Welcome! I'm going to help you generate a random password today. Please select the number of characters you would like you password to be.")
  // Finally, push our password string to the document's HTML
  const password = generatePassword();
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
}
