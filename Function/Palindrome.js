const readline=require('readline-sync');
let number = readline.questionInt("Enter number : ");
function palindromCheck(number){
   let n=number;
    let rem=0;
    let temp = 0;
    let result = 0;
    let palindrom = true;
    temp = number;
    while(n > 0){
        rem = n % 10;
        n = parseInt(n /10);
        result = result *   10 + rem;
    }
    if(result != temp){
      palindrom = false;
    }
    return palindrom;
}
if(palindromCheck(number)){
    console.log("Number is palindrom");
}else{
    console.log("Number is not a palindrom");
}