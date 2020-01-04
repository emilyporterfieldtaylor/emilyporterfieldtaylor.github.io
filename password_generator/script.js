// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthOfPassword = 0;

while (lengthOfPassword <= 7 || lengthOfPassword >= 129) {
    lengthOfPassword = prompt('How long would you like your password to be. Enter a number between 8 and 128.', '');
    if (lengthOfPassword <= 7) {
        alert("Must be at least 8 characters!");
    } else if (lengthOfPassword >= 129) {
        alert("Must be less than 128 characters!");
    };
}
var capital = confirm('Would you like your password to contain capital letters?');

var lowercase = confirm('Would you like your password to contain lowercase letters?');

var numbers = confirm('Would you like your password to contain numbers?');

var specialCharacters = confirm('Would you like your password to contain capital letters?');

console.log(lengthOfPassword);
console.log(capital);
console.log(lowercase);
console.log(numbers);
console.log(specialCharacters);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER