//function that will be executed when the "Generate Password" button is clicked.
//Set a generated passwork, I chose to do 8-24 characters for length since thats seems more usable than 128 characters. 
function generatePassword() {
  let passwordLength = parseInt(prompt("Enter the password length (8 to 24 characters):"));
  // if will check number
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 24) {
    alert("Invalid input. Please enter a number between 8 and 24.");
    return;
  }
  let includeLower = confirm("Include lowercase characters?");
  let includeUpper = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");
}
