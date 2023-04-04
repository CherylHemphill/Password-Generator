// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  let charset =" 0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-:?><,./ABCEDEFGHIJKLMNOPQRSTUVWXYZ ";
  let size = charset.length, min=8, max=128;
for (let i = 0; i < charset.length; i++){
  writePassword = password + charset.charAt(Math.floor(Math.random ()) * size)
}
return password;

  passwordText.value = password;

}
console.log(password)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
