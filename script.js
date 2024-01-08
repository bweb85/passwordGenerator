 // Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var characters = prompt("How many characters would you like your password to be? Choose between 8 and 128");
// conditions for password
if (characters < 8){
  alert ("Please choose a numercial value between 8 and 128. Start again");
  return 
};
if (characters > 128) {
  alert ("Please choose a numercial value between 8 and 128. Start again");
  return 
};
if (isNaN(characters) === true) {
  alert ("Please choose a numercial value between 8 and 128. Start again");
  return
};
// conditions for password characters
var specCharac = confirm("Would you like special characters?  e.g !,£,% Press ok to confirm or cancel for no.");
var numCharac = confirm("Would you like numbers? Press ok to confirm or cancel for no.");
var lowCasCharac = confirm ("Would you like lowercase characters? Press ok to confirm or cancel for no.");
var upCasCharac = confirm("Would you like upper case characters? Press ok to confirm or cancel for no.");
if (!specCharac && !numCharac && !lowCasCharac && !upCasCharac) {
  alert ("You must choose at least one type of character. Please start again");
  return
};

// options object for generatePassword function
var options = {
  characters: characters, 
  specCharac: specCharac, 
  numCharac: numCharac,
  lowCasCharac: lowCasCharac,
  upCasCharac: upCasCharac
};
return options; 
};

// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
};

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions(); 

// concat user options with arrays
var allCharacters = [];
if (options.specCharac) allCharacters = allCharacters.concat(specialCharacters);
if (options.numCharac) allCharacters = allCharacters.concat(numericCharacters);
if (options.lowCasCharac) allCharacters = allCharacters.concat(lowerCasedCharacters);
if (options.upCasCharac) allCharacters = allCharacters.concat(upperCasedCharacters);

// logic to create password using user input options
var password = "";
for (var i = 0; i < options.characters; i++) {
  password += getRandom(allCharacters)
};

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);