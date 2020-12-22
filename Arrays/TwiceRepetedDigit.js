let TwiceDigitNum = new Array();
for (i = 1; i < 100; i++) {
    if (i % 11 == 0)
    TwiceDigitNum.push(i);
}
console.log("Twice  digit numbers is : " + TwiceDigitNum.toString());