function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length. Please choose a length between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type should be selected.");
    return "";
  }

  var password = "";
  var characterOptions = "";

  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()_-+=<>?/{}[]|~";

  if (includeLowercase) {
    characterOptions += lowercaseCharacters;
  }
  if (includeUppercase) {
    characterOptions += uppercaseCharacters;
  }
  if (includeNumeric) {
    characterOptions += numericCharacters;
  }
  if (includeSpecial) {
    characterOptions += specialCharacters;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterOptions.length);
    password += characterOptions[randomIndex];
  }

  return password;
}

document.addEventListener("DOMContentLoaded", function () {

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
});




