// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var lcArry = ['a','b','c','d','e','f','h','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var ucArry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specialArr = ['!','?','$','/','|','(',')','&','@','<',
'>','[',']'];
var numberArry = ['0','1','2','3','4','5','6','7','8','9'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var conditionsArry =[];
  length=(prompt('Password Length? Must be 8 - 128 characters.'));

  if (length < 8 || length > 128 || isNaN(length) ) {
    alert("Please select number between 8-128.")
    return 
  }
  
  if (confirm("Would you like lowercase letters?")) {
    conditionsArry = conditionsArry.concat(lcArry);
  }
  if (confirm("Would you like uppercase letters?")) {
    conditionsArry = conditionsArry.concat(ucArry);
  }
  if (confirm("Would you like special characters?")) {
    conditionsArry= conditionsArry.concat(specialArr);
  }
  if (confirm("Would you like numbers?")) {
    conditionsArry = conditionsArry.concat(numberArry);
  }
  var randomChar =""; 

  for (i=0;i<length; i++) {
    randomChar+= conditionsArry[Math.floor(Math.random()*conditionsArry.length)];
  }
  console.log(randomChar)


  return randomChar;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
