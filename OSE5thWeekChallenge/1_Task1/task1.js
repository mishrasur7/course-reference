var sum = 0; 
var count = 0; 

function doTheAnalysis() {
    var number = Number(document.getElementById("input").value); 
    sum = sum + number; 
    count++; 
    var average = sum/count; 
    document.getElementById("avgOutput").innerHTML = average.toFixed(4); 
}


    