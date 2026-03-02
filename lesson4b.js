// anonymous function== does not have a name ...its usually assigned as a variable and passed as an argument or used immidiately
// example 1
const greet =function (){
    console.log("welcome to the world of automotives")
}
// call the function using the variable name which is greet
greet()
// create an anonymous function with parameters to check the difference of two numbers
const sub =function(num1,num2){
    let answer= num1-num2
    console.log(`the answer is ${answer}`)
}
sub(23,10)
// product
const product =function(num1,num2){
    let answer= num1*num2
    console.log (`the answer is ${answer}`)
}
product(23,10)