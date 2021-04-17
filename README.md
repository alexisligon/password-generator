# 03 Javascript: Password Generator

## The Task

This week I had to write code to randomly generate a password. Users are presented with a series of prompts for password criteria including uppercase, lowercase, numbers, and special characters options. 

<img src="./img/ask1.jpg" />

 * ^^this image displays the first ask, if the user wants to include uppercase letters. If they hit OK, then the computer randomly selects a character from that string and saves it.
 * this ensures that for each criteria selected, at least one of those characters will be in the final password. Without this feature, random selected may possibly give a password without some of the criteria. 
 * if the user hits cancel, they choose not to include this criteria in the password, the computer does not pull that selected string.
 * the following slides display the remaining questions for password criteria.

 <img src="./img/ask2.jpg" />
 <img src="./img/ask3.jpg" />
 <img src="./img/ask4.jpg" />
 <img src="./img/ask5.jpg" />

 * the image above displays the question of how many characters the user wants their password to be. 

 <img src="./img/error.jpg"/>

 * If they choose less than 8 characters or more than 128 characters, an alert tells them to choose within the parameter and the page is reloaded.

 <img src="./img/console-log.jpg"/>

* the image above displays how the computer builds a string of selected character criteria to choose from for the random password

<img src="./img/all-characters.jpg"/>

* the image above displays how the computer ensures that at least one of every character selected will be in the final password. After ever selection, it randomly pulls a character from that selected string only and is then added to the next string to be the start of the final password.

<img src="./img/final password.jpg"/>

* the image above displays an example of the final password.

<a href = "https://alexisligon.github.io/password-generator/">Password Generator</a>


 