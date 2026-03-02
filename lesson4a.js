// functions with parameters== usually accept arguments
function greet (name){
    console.log ("Mercedes"+ name)
}
// call the function 
greet("g63")
greet("e63")
greet("c63")

// write a function that is accepting county_name as a parameter and log a message, my county is +county_name
function myCounty(county_name){
    console.log ("my county is :" + county_name)
}
// call your function
myCounty ("Nairobi")
myCounty("Kiambu")
//  create a function called add which is acception num1 and num2 as parameters to find the sum of two numbers
function add(num1,num2){
    let answer= num1 + num2
    console.log(`the answer is ${answer}`)
}
add(23,10)