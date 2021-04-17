//variables of characters to select from
var charSelected = "";
var special = " !@#$%^&*+',-./:;<=>?~\|";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower= "abcdefghijklmnopqrstuvwxyz";
var num= "0123456789";




// Assignment Code
var generateBtn = document.querySelector("#generate");
var refreshBtn = document.querySelector("#refresh");

function refreshPage () {
  window.location.reload();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//password criteria prompts
function generatePassword() {
  var prePass;//declared for ensuring each selected criteria is in the final password string
  var firstPass = "";
  var types = 0;

//ask for uppercase
var ask1 = window.confirm("Should your password contain uppercase letters?");
if (ask1 === false) {
  charSelected = charSelected;
  console.log(charSelected);
} else {
  charSelected = charSelected+ upper;//pull from upper string
  console.log(charSelected);
  var prePass = upper.charAt(Math.floor(Math.random() * upper.length));//randomly pulls one character from this string and adds to the final password, 
  //this ensures at least one character is chosen from each selected string
  types++;//
  console.log(prePass);
}

//ask for lowercase
var ask2 = window.confirm ("Should your password contain lowercase letters?");
if (ask2 === false) {
  charSelected = charSelected;
  console.log(charSelected);
} else {
  charSelected = charSelected + lower;//pull from lower string
  console.log(charSelected);
  var prePass = lower.charAt(Math.floor(Math.random() * lower.length)) + prePass;
  types++;
  console.log(prePass);
}

//ask for numbers
var ask3 = window.confirm ("Should your password contain numbers?");
if (ask3 === false) {
  charSelected = charSelected; 
  console.log(charSelected);
} else {
  charSelected = charSelected+ num;//pull from numb string
  console.log(charSelected);
  var prePass = num.charAt(Math.floor(Math.random() * num.length)) + prePass;
  types++;
  console.log(prePass);
}

//ask for special characters
var ask4 = window.confirm ("Should your password contain special characters?");
if (ask4 === false) { 
  charSelected = charSelected;
  console.log(charSelected);
} else {
  charSelected = charSelected + special;//pull from char string  
  console.log(charSelected);
  var prePass = special.charAt(Math.floor(Math.random() * special.length)) + prePass;
  types++;
  console.log(prePass);
}
var theFinalPassword = '' //starting blank password to add random characters to
theFinalPassword = theFinalPassword.concat(prePass);//adds first randomly selected criteria characters to the blank final password

if (types === 0) {
  window.alert("Please choose at least one character type");
   return window.location.reload();//reloads the page if at least one character type was not chosen
  
}


//ask for password length
var passnum = parseInt(window.prompt("How many characters should your password be? Choose a number between 8 and 128")); //parseInt allows input to be interger and not a string
if (passnum >= 8 && passnum <=128){ //allows only input between 8 and 128
 
 for (var i = types; i < passnum; i++) { //runs the loop for the selected number of times minus the random characters first pulled from the strings
  var passwordText = charSelected.charAt(Math.floor(Math.random() * charSelected.length));//charAt pulls from the entire string, Math.floor Math.random makes the selection random
  
  console.log (theFinalPassword);
  theFinalPassword = theFinalPassword.concat(passwordText);// adds each random selection to the final password
   }
   return (theFinalPassword); //displays the final randomly selected password
}
 else {
  alert("Please choose between 8 and 128");
  return window.location.reload();//reloads the page if number is outside of set parameter
}



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
refreshBtn.addEventListener("click", refreshPage);//added new password button to refresh page and delete previous criteria selection
