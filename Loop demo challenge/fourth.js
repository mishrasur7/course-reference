var num1 = 1; 
var num2 = 1; 
console.log("o:" + num1); 
console.log("1:" + num2); 

var i = 2
while (i <= 6) {
    var temp = num2; 
    num2 = num1 + num2; 
    num1 = temp; 
    console.log(i + ":" + num2); 
    i = i + 1
}