var charSelected = "";

  var special = " !@#$%^&*+',-./:;<=>?~\|";
  var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower= "abcdefghijklmnopqrstuvwxyz";
  var num= "0123456789";




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//password criteria prompts
function generatePassword() {

//ask for uppercase
var ask1 = window.confirm("Should your password contain uppercase letters?");
if (ask1 === true) {
  charSelected = charSelected + upper;//pull from upper string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

//ask for lowercase
var ask2 = window.confirm ("Should your password contain lowercase letters?");
if (ask2 === true) {
  charSelected = charSelected + lower;//pull from lower string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

//ask for numbers
var ask3 = window.confirm ("Should your password contain numbers?");
if (ask3 === true) {
  charSelected = charSelected + num;//pull from numb string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

//ask for special characters
var ask4 = window.confirm ("Should your password contain special characters?");
if (ask4 === true) { 
  charSelected = charSelected + special;//pull from char string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

//ask for password length
var passnum = window.prompt("How many characters should your password be? Choose a number between 8 and 128");
if (passnum >= 8 && passnum <=128) { //allows only input between 8 and 128
  for (var i = 0; i < passnum.length; index++) {
    var passwordText = Math.floor(Math.random() * passnum.length);
    return passwordText;
  }
  
  }
 else {
  alert("Please choose between 8 and 128")
  return; // need to stop loop if input outside of parameter
}


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
