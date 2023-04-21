function generatePassword() {
  const passwordLength = prompt("Choose a password length between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length. Please choose a length between 8 and 128 characters.");
    return "";
  }

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type should be selected.");
    return "";
  }

  const password = "";
  const characterOptions = "";

  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/{}[]|~";

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

  for (const i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterOptions.length);
    password += characterOptions[randomIndex];
  }

  return password;
}

document.addEventListener("DOMContentLoaded", function () {

  const generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
});




