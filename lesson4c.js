// IIFE immediately invoked function expression 
// the function runs immediately
// anything inside the function remains local without polluting the global environment

// example 1
(function (){
    console.log("this is an immediately invoked function")
})();

// create a self calling anonymous function to add two numbers
(function(){
    let x =67
    let y =45
    console.log(x+y)
console.log (typeof (x))
})();
  // x and y are only inside IIFE
//   outside the function, x does not exist(only available on local environment)