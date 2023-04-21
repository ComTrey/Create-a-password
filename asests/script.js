// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Gives the person the criteria
function generatePassword() {
  const length = parseInt(prompt("Choose a password length between 8 and 128 characters:"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    return "";
  }
  const includeLowercase = confirm("Do you want to include lowercase characters?");
  const includeUppercase = confirm("Do you want to include uppercase characters?");
  const includeNumeric = confirm("Do you want to include numeric characters?");
  const includeSpecial = confirm("Do you want to include special characters?");
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type should be selected.");
    return "";
  }

// Add event listener to generate button

}
