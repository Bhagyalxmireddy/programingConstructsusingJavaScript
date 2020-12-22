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
function PrimeCheck(number) {
	let n = number;
	let Prime = true;
	if (n == 1) {
		Prime = false;
	}
	else if (n > 1) {
		for (let i = 2; i < n; i++) {
			if (n % i == 0) {
				Prime = false;
				break;
			}
		}
	}
    return Prime;
}
if(palindromCheck(number)){
    if(PrimeCheck(number)){
    console.log("Number is palindrom and the primw");
    }else{
        console.log("Number is palindrom and not a prime");
    }
}else{
    console.log("Number is not a palindrom");
}