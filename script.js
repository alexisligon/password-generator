// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
var length = window.prompt("How many characters should your password be? Choose a number between 8 and 128");
if (length >= 8 && length <=128) { //allows only input between 8 and 128
  console.log (length);
} else {
  console.log("invalid"); // need to stop loop if input outside of parameter
}

var ask1 = window.confirm("Should your password contain uppercase letters?");
if (ask1 === true) {
  console.log ("UPPERCASE"); //pull from upper string
} else {
  console.log ("no uppercase");
}

var ask2 = window.confirm ("Should your password contain lowercase letters?");
if (ask2 === true) {
  console.log ("lowercase"); //pull from lower string
} else {
  console.log ("no lowercase");
}

var ask3 = window.confirm ("Should your password contain numbers?");
if (ask3 === true) {
  console.log ("numbers"); //pull from numb string
} else {
  console.log ("no numbers");
}

var ask4 = window.confirm ("Should your password contain special characters?");
if (ask4 === true) {
  console.log ("special characters"); //pull from char string
} else {
  console.log ("no specials");
}



  return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var password = {
  char: " !@#$%^&*+',-./:;<=>?~\|",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  num: "0123456789",
}
