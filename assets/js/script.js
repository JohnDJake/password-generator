// Define character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

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


// Generate a password
// This function is the part of this application that I wrote. The rest is starter code that was given to me.
function generatePassword() {
    // initialize variables for the password criteria
    var passwordLength = 0;
    var wantsLowercase = false, wantsUppercase = false, wantsNumeric = false, wantsSpecial = false;

    // ask for the password length, and keep asking until they enter a valid response
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Enter the desired password length as a number between 8 and 128, inclusive"));
    }

    // ask which character sets the user wants included in the password, and keep asking if they don't choose any
    while (!(wantsLowercase || wantsUppercase || wantsNumeric || wantsSpecial)) {
        alert("Your password may contain lowercase letters, uppercase letters, numbers, and/or special characters.\nChoose at least one type");
        wantsLowercase = confirm("Do you want your password to include lowercase letters?");
        wantsUppercase = confirm("Do you want your password to include uppercase letters?");
        wantsNumeric = confirm("Do you want your password to include numbers?");
        wantsSpecial = confirm("Do you want your password to include special characters?");
    }

    // create a variable for the characters the user wants and add each character set that they selected
    var userCharset = "";
    if (wantsLowercase) { userCharset += lowercase; }
    if (wantsUppercase) { userCharset += uppercase; }
    if (wantsNumeric) { userCharset += numbers; }
    if (wantsSpecial) { userCharset += specials; }

    // initialize a variable to generate the password into
    var password = "";

    // loop a number of times equal to the desired length
    for (let i = 0; i < passwordLength; i++) {
        password += userCharset[Math.floor(Math.random() * userCharset.length)];
    }

    return password;
}