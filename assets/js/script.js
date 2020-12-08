// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate a password placeholder
// TODO actually generate a password
function generatePassword() {
    // initialize variables for the password criteria
    var passwordLength = 0;
    var lowercase = false, uppercase = false, numeric = false, special = false;

    // ask for the password length, and keep asking until they enter a valid response
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Enter the desired password length as a number between 8 and 128, inclusive"));
    }

    // ask which character sets the user wants included in the password, and keep asking if they don't choose any
    while (!(lowercase || uppercase || numeric || special)) {
        alert("Your password may contain lowercase letters, uppercase letters, numbers, and/or special characters.\nChoose at least one type");
        lowercase = confirm("Do you want your password to include lowercase letters?");
        uppercase = confirm("Do you want your password to include uppercase letters?");
        numeric = confirm("Do you want your password to include numbers?");
        special = confirm("Do you want your password to include special characters?");
    }

    return "password12345";
}