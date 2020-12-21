const readline = require('readline-sync');
let a = readline.questionInt("Enter a value: ");
console.log("a =" +a);
let b = readline.questionInt("Enter b value: ");
console.log("b =" +b);
let c = readline.questionInt("Enter c value: ");
console.log("c =" +c);
let d = (a + b)*c;
let e = (a%b) +c;
let f = c + (a/b);
let g = c * (b+c);
if(d > e && d > f && d > g){
    console.log("Max value is : " +d);
}else if(e > d && e > f && e > g){
    console.log("Max value is : " +e);
}else if(f > d && f > e && f > g){
    console.log("Max value is : " +f);
}else{
    console.log("max value is :" +g);
}
if(d < e && d < f && d < g){
    console.log("Min value is : " +d);
}else if(e < d && e < f && e < g){
    console.log("Min value is : " +e);
}else if(f < d && f < e && f < g){
    console.log("Min value is : " +f);
}else{
    console.log("min value is :" +g);
}
