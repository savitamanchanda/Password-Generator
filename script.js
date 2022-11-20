// Assignment code here
var nCharacters 
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+" ,"-", ".", "/", ":", "?"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var isSpecialChar 
var isNumericChar
var isUpperCase 
var isLowerCase

function generatePassword() {
nCharacters = window.prompt("How many characters do you want?");
console.log(nCharacters);

if ((nCharacters <= 8) || (nCharacters >= 128)) {
  window.alert("Incorrect value, number of characters must be between 8 and 128.")
  return generatePassword();
} 

isSpecialChar = window.confirm("Click OK to confirm including special characters.");
console.log(specialCharacters);

isNumericChar = window.confirm("Click OK to confirm including numerical values.");

isUpperCase = window.confirm("Click OK to confirm including Upper Case characters.");

isLowerCase = window.confirm("Click OK to confirm including Lower Case characters."); 


var possibleOption = [];

if (isSpecialChar) {
possibleOption = specialCharacters;
}

if (isNumericChar) {
  possibleOption = possibleOption.concat(numericCharacters);
}

if (isUpperCase) {
    possibleOption = possibleOption.concat(upperCase);
}

if (isLowerCase) {
    possibleOption = possibleOption.concat(lowerCase);
}
var password = "";

for (var i = 0; i < nCharacters; i++) { 
var index = Math.floor(Math.random() * possibleOption.length); 
console.log(index + "ccc");

password = password.concat(possibleOption[index]);
console.log(password);
}
return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
