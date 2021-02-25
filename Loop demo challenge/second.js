var num1 = 1; 
var num2 = 1; 
console.log("0:" + num1); 
console.log("1:" + num2); 

for (var i = 2; i<=6; i++) {
    var temp = num2; 
    num2 = num1 + num2;  
    num1 = temp; 
    console.log(i + ":" + num2); 
}