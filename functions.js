
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE
function sum(num1,num2){
  num1 = +num1
  num2 = +num2
  return num1 + num2
}

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE
//the correct code

// function greaterThanFive(number){
//   if(numbersPutIn > 5){
//     console.log(true)
//     return true
//   }else{
//     console.log(false)
//     return false
//   }
// }


let numbersPutIn = [3]

function greaterThanFive(arr){
 let answers = []
 for (let i = 0; i < arr.length; i++){
   if(arr[i] > 5){
     answers.push('True')
    } else {
      answers.push('False')
    }
    return answers
   }
}
let arrayEvaluator = greaterThanFive(numbersPutIn)
console.log(arrayEvaluator)
//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE
// let wordNames = ['Zars']

function findZWords(word) {

  if( /^Z/i.test(word)) {
      console.log('the name begins with Z');
  } else {
      console.log('the name does not begin with Z');
  }
}

let wordNamesPeeps = findZWords(wordNames);
console.log(wordNamesPeeps)


// 
//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE
function iLove(name,love){
  return name + ' loves ' +  love
}
let together = iLove("Kent","Computers")
console.log(together)

