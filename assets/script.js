// Assignment code here

// set variables for password

let charUp = ["ABCDEFGHIJKLMNOPQRSTUVWZYZ"];
let charLo = ["abcdefghijklmnopqrstuvwxyz"];
let charNum = ["1234567890"];
let charSpc = ["!@#$%^&*()_+"];
let password = " "; 

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// prompt user for criteria (length between 8-128, upperCase, lowerCase, numbers, symbols)
var length = prompt("How long would you like your password to be? (8-128 characters)");
if (length <8 || length > 128) {
  return "Please choose a valid number between 8 and 128."
} else if (isNaN(length)) {
  return "Please enter a valid number."
} else {
  alert ("Your password will be " + length + " characters long.");
}
  console.log(length);
 
var capsUp = confirm("Include UpperCase? y/n");
if (capsUp) {
  alert ("Your password will  include Uppercase letters.");
} else  {
  alert ("Your password will not include Uppercase letters");
}

var capsLo = confirm("Include LpperCase? y/n");
if (capsLo) {
  alert ("Your password will  include Lowercase letters.");
} else  {
  alert ("Your password will not include Lowercase letters");
}

var num = confirm("Include Numbers? y/n");
if (num ) {
  alert ("Your password will  include Numbers.");
} else  {
  alert ("Your password will not include Numbers.");
}

var sym = confirm("Include Symbols? y/n");
if (sym ) {
  alert ("Your password will  include Symbols.");
} else  {
  alert ("Your password will not include Symbols.");
}
}

// concat user selections

if (capsUp) {
  password = password.concat(capsUp)
}
if (capsLo) {
  password = password.concat(capsLo)
}
if (num) {
  password = password.concat(num)
}
if (sym) {
  password = password.concat(sym)
}
/*
for (var i = 0; i <= length; i++){
  password = Math.floor(Math.random() * password.length);

  return password;
}; 
*/
// Write password to the #password input
function writePassword() {
  let password = generatePassword() 
  let passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

console.log(password)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
