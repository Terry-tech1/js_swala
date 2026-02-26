let distance =1002
if (distance<0){
    console.log("invalid");
}
else if (distance <=100){
    console.log ("Pay 5 USD");
}
else if(distance >100 && distance<=500){
    console.log("Pay 10 USD");
}
else if (distance >500 && distance<=1000){
    console.log("Pay 20 USD");
}
else{
    console.log("Pay 40 USD");
}