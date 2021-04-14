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


function generatePassword() {
  


var ask1 = window.confirm("Should your password contain uppercase letters?");
if (ask1 === true) {
  charSelected = charSelected + upper;//pull from upper string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

var ask2 = window.confirm ("Should your password contain lowercase letters?");
if (ask2 === true) {
  charSelected = charSelected + lower;//pull from lower string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

var ask3 = window.confirm ("Should your password contain numbers?");
if (ask3 === true) {
  charSelected = charSelected + num;//pull from numb string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

var ask4 = window.confirm ("Should your password contain special characters?");
if (ask4 === true) { 
  charSelected = charSelected + special;//pull from char string
  console.log (charSelected);
} else {
  charSelected = charSelected;
  console.log (charSelected);
}

var passnum = window.prompt("How many characters should your password be? Choose a number between 8 and 128");
if (passnum >= 8 && passnum <=128) { //allows only input between 8 and 128
  console.log (passnum);
  for (let i = 0; i < passnum.length; i++) {
    const element = passnum[i]; //for loop runs total number input for that many characters
    var write = charSelected[Math.floor(Math.random() * charSelected.length)];
    return (write);
  }
} else {
  alert("Please choose between 8 and 128")
  return; // need to stop loop if input outside of parameter
}
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var write = password[Math.floor(Math.random) * password.char.length];
// console.log (write)

// for (var i = 0; i < length; i++) {

// }