console.log('Welcome, type in a password with at least 10 charaters')

// const passwordInput = required('passwordInput').create

function password(){
  if (password.length >= 10){
    console.log("Longer password required")
  } else {
    console.log("Login Corret")
  }
}
let passwordInput = password("asd");
console.log(passwordInput) 

