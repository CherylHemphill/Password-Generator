// Assignment code here

// set variables for password

let charUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let charLo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let charSpc = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];


  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// prompt user for criteria (length between 8-128, upperCase, lowerCase, numbers, symbols)
var length = prompt("How long would you like your password to be? (8-128 characters)");
  if (length <8 || length > 128) {
  return "Please choose a valid number between 8 and 128."
} 
  else if (isNaN(length)) {
  return "Please enter a valid number."
} 
  else {
  alert ("Your password will be " + length + " characters long.");
}
 
 
  let Up = confirm("Include UpperCase? y/n");
  if (Up)  {
  alert ("Your passwocrd will  include Uppercase letters.");
} 
  else  {
  alert ("Your password will not include Uppercase letters");
}


 let Lo = confirm("Include LpperCase? y/n");
  if (Lo) {
  alert ("Your password will  include Lowercase letters.");
}
 else  {
  alert ("Your password will not include Lowercase letters");
}


let Num = confirm("Include Numbers? y/n");
  if (Num ) {
  alert ("Your password will  include Numbers.");
} 
  else  {
  alert ("Your password will not include Numbers.");
}


 let Spc = confirm("Include Symbols? y/n");
  if (Spc ) {
  alert ("Your password will  include Symbols.");
}
  else  {
  alert ("Your password will not include Symbols.");
}


let allUserOptions = []; 
// concat user selections

if (Up) {
  allUserOptions = allUserOptions.concat(charUp)
}
if (Lo) {
  allUserOptions = allUserOptions.concat(charLo)
}
if (Num) {
  allUserOptions = allUserOptions.concat(charNum)
}
if (Spc) {
  allUserOptions = allUserOptions.concat(charSpc)
}

let password = [];

// Loop password 
for (var i = 0; i < length; i++) {
  var index = Math.floor(Math.random() * allUserOptions.length);
  var character = allUserOptions[index];
  password.push(character);
}

return password.join('')
}; 

// Write password to the #password input
function writePassword() {
   password = generatePassword() 
  let passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
