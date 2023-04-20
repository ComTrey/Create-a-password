//function that will be executed when the "Generate Password" button is clicked.
//Set a generated passwork, I chose to do 8-24 characters for length since thats seems more usable than 128 characters. 
function generatePassword() {
  let passwordLength = parseInt(prompt("Enter the password length (8 to 24 characters):"));
  // if will check number
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 24) {
    alert("Invalid. Enter a number between 8 and 24.");
    return;
  }
  let includeLower = confirm("Include lowercase characters?");
  let includeUpper = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");

// checks if the user has not selected any character type
if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
  alert("One character is needed.");
  return;
}
// Needed to specify what the user can use.

  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*';

  let allowedChars = '';
  if (includeLower) allowedChars += lowerChars;
  if (includeUpper) allowedChars += upperChars;
  if (includeNumeric) allowedChars += numericChars;
  if (includeSpecial) allowedChars += specialChars;
  let password = '';
  //for loop will generates the password by selecting at random 
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById("passwordDisplay").textContent = password;
}