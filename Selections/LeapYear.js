const readline = require('readline-sync');
let year = readline.questionInt("Enter year: ");
console.log(year);
let a = (year%4);
let b = (year%100);
let c = (year%400);
if(a == 0 && b != 0 || c == 0){
    console.log(+year + "is a leap year");
}else{
    console.log(+year+ "is not a leap year");
}