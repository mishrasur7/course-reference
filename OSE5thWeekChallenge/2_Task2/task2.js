var min = ""; 
var max = ""; 

function doTheAnalysis() {
var number = Number(document.getElementById("input").value); 

if(min === "" || number < min) {
    min = number; 
    document.getElementById("minOutput").innerHTML = min; 
}

if(max === "" || number > max) {
    max = number; 
    document.getElementById("maxOutput").innerHTML = max; 
}

}