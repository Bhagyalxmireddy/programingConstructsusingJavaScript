const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
let array = new Array();
for(i = 2;i <= number;i++)
{
    if((number % i == 0) && CheckPrime(i) == true)
    array.push(n);
} 
 
console.log("Total prime factors : "+array.length);
function CheckPrime(n)
    {
        let factors = 0;
        for(i = 2;i < n ;i++)
        {
            if(n % i == 0)
                factors++;      
        }
        if(factors == 0)
        {
            return true;
        }
        return false;
    } 