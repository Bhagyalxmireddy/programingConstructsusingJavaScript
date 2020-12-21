const readline=require('readline-sync');
let Number=readline.questionInt("Enter units number:");

if(Number==1){
    console.log("ones");
}else if(Number==10){
    console.log("Tens");
}else if(Number==100){
    console.log("Hundereds");
}else{
    console.log("Enter Proper number");
}