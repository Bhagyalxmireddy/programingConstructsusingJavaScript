//UC1 using Random function To get single digit
/*let value = Math.floor(Math.random() * 10); 
console.log("Random value is : " +value);

//Uc2 Using Random Function to get Dice value Between 1 to 6
let value1 = (Math.floor(Math.random() * 10) % 6) + 1; 
console.log("Random value for Dice is : " +value1);

//Uc3
let a = (Math.floor(Math.random() * 10) % 6) + 1; 
console.log("first Random value of Dice is : " +a);
let b = (Math.floor(Math.random() * 10) % 6) + 1; 
console.log("second Random value of Dice is : " +b);
let c = a + b;
console.log("Addition Of Two Random Dice values is : " + c);*/

//Uc4 Read 5 random 2 digit values and find Sum and avg
let result = 0;
for(let a = 1; a<= 5;a ++){
     let value = Math.floor(Math.random() * 100); 
     console.log("random value is :" +value);
     result += value;
}
console.log("The sum of Five random values is :" +result);
let avg = result / 5;
console.log("The avg of five random values is :" +avg);


