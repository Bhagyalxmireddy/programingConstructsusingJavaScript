const readline = require('readline-sync');
let number = readline.questionInt("Enter The unit Number : ");
console.log("Number is :" +number);
switch(number){
    case 1:
        console.log("Ones");
    break;
    case 10:
        console.log("Tens");
    break;
    case 100:
        console.log("Hunderds");
    break;
    default:
        console.log("Enter a proper number");
    break;
}