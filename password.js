
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Welcome, type in a password with at least 10 charaters',function(answer){
  if(answer.length <= 9){
    console.log ("Try again");
  }
  else
  {
    console.log("Correct!")
  }
  
  reader.close()
})

// function checkLength(obj){
//   var passLength = obj.length;
//   if(passLength <= 9){
//     return "Try again";
//   }
//   else
//   {
//     console.log("Correct!")
//   }
// }
// let passwordInput = checkLength("1234567891") 
// console.log(passwordInput)






// function password(){
//   if (password.length >= 10){
//     console.log("Longer password required")
//   } else {
//     console.log("Login Corret")
//   }
// }
// let passwordInput = password("asd");
// console.log(passwordInput) 

