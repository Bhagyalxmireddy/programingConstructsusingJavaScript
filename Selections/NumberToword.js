const readline = require('readline-sync');
let a = readline.questionInt("Enter number: ");
console.log("The enterd value is: " +a);
if(a == 0){
    console.log("Zero");
}else if(a == 1){
    console.log("one");
}else if(a == 2){
    console.log("Two");
}else if(a == 3){
    console.log("Three");
}else if(a == 4){
    console.log("Four");
}else if(a == 5){
    console.log("Five");
}else if(a == 6){
    console.log("Six");
}else if(a == 7){
    console.log("seven");
}else if(a == 8){
    console.log("Eight");
}else if(a== 9){
    console.log("Nine")
}else{
    console.log("enter a proper Numnber");
}